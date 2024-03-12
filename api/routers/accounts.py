from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from authenticator import authenticator
from queries.accounts import (
    AccountIn,
    Account,
    ListAccountOut,
    AccountRepository,
    DuplicateAccountError,
    AccountForm,
    AccountToken,
    HttpError,
)

router = APIRouter()


@router.post(
    "/accounts", response_model=AccountToken | HttpError, tags=["accounts"]
)
async def create_account(
    account_info: AccountIn,
    request: Request,
    response: Response,
    repo: AccountRepository = Depends(),
):
    hashed_password = authenticator.hash_password(account_info.password)
    try:
        account = repo.create_account(account_info, hashed_password)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create an account with those credentials",
        )
    form = AccountForm(
        username=account_info.username, password=account_info.password
    )
    token = await authenticator.login(response, request, form, repo)
    response.set_cookie(
        key="fastapi_token", httponly=True, value=token.access_token
    )
    return AccountToken(account=account, **token.dict())


@router.get("/accounts", response_model=ListAccountOut, tags=["accounts"])
def get_account_list(repo: AccountRepository = Depends()):
    return repo.get_account_list()


@router.get("/token", response_model=AccountToken | None)
async def get_token(
    request: Request,
    account: Account = Depends(authenticator.try_get_current_account_data),
) -> AccountToken | None:
    if account and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }
