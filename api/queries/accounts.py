from pydantic import BaseModel
from typing import List
from jwtdown_fastapi.authentication import Token
from .client import Queries


class AccountForm(BaseModel):
    username: str
    password: str


class HttpError(BaseModel):
    detail: str


class DuplicateAccountError(ValueError):
    pass


class AccountOut(BaseModel):
    id: str
    username: str


class ListAccountOut(BaseModel):
    accounts: List[AccountOut]


class AccountIn(BaseModel):
    username: str
    password: str


class Account(AccountOut):
    hashed_password: str


class AccountToken(Token):
    account: AccountOut


class AccountRepository(Queries):
    COLLECTION = "accounts"

    def get_account(self, username: str) -> AccountOut:
        account = self.collection.find_one({"username": username}) # TODO error handling for no account
        account["id"] = str(account["_id"])
        del account["_id"]
        return Account(**account)

    def get_account_list(self) -> AccountOut:
        db_cursor = self.collection.find()
        account_list = []
        for account in db_cursor:
            account["id"] = str(account["_id"])
            del account["_id"]
            account_list.append(account)

        return ListAccountOut(accounts=account_list)

    def create_account(
        self, info: AccountIn, hashed_password: str
    ) -> AccountOut:
        if self.collection.find_one({"username": info.username}):
            raise DuplicateAccountError
        data = {"username": info.username, "hashed_password": hashed_password}
        account_id = self.collection.insert_one(data).inserted_id
        new_account = self.collection.find_one({"_id": account_id})
        new_account["id"] = str(new_account["_id"])
        del new_account["_id"]
        return new_account
