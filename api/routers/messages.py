from pymongo.errors import WriteError
from fastapi import (
    Depends,
    HTTPException,
    status,
    APIRouter,
)
from queries.messages import (
    MessageIn,
    MessageOut,
    MessageListOut,
    MessageRepository,
    HttpError,
)
from authenticator import authenticator

router = APIRouter()


@router.post(
    "/messages", response_model=MessageOut | HttpError, tags=["messages"]
)
def create_message(
    new_message: MessageIn,
    repo: MessageRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    try:
        return repo.create_message(new_message)
    except WriteError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create message DERP",
        )


@router.get(
    "/chatroom/{chatroom_id}/messages",
    response_model=MessageListOut | HttpError,
    tags=["messages"],
)
def get_room_message_list(
    chatroom_id: str,
    repo: MessageRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.get_room_message_list(chatroom_id)


@router.get(
    "/messages/{id}", response_model=MessageOut | HttpError, tags=["messages"]
)
def get_message(
    id: str,
    repo: MessageRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.get_message(id)


@router.get(
    "/account/{user_id}/messages",
    response_model=MessageListOut | HttpError,
    tags=["messages"],
)
def get_user_message_list(
    user_id: str,
    repo: MessageRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.get_user_message_list(user_id)