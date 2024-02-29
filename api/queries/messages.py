from pydantic import BaseModel
from typing import List
from .client import Queries
from bson.objectid import ObjectId
from datetime import datetime


class MessageOut(BaseModel):
    id: str
    user_id: str
    chatroom_id: str
    content: str
    timestamp: datetime


class MessageIn(BaseModel):
    user_id: str
    chatroom_id: str
    content: str


class MessageListOut(BaseModel):
    messages: List[MessageOut]


class HttpError(BaseModel):
    detail: str


class MessageRepository(Queries):
    COLLECTION = "messages"

    def get_message(self, id: str) -> MessageOut:
        message = self.collection.find_one({"_id": ObjectId(id)})
        message["id"] = str(message["_id"])
        del message["_id"]
        return message

    def get_room_message_list(self, chatroom_id: str) -> MessageListOut:
        messages = []
        db_cursor = self.collection.find({"chatroom_id": chatroom_id})
        for message in db_cursor:
            message["id"] = str(message["_id"])
            del message["_id"]
            messages.append(message)
        return {"messages": messages}

    def create_message(self, new_message: MessageIn) -> MessageOut:
        new_message = new_message.dict()
        new_message["timestamp"] = datetime.now()
        self.collection.insert_one(new_message)
        new_message["id"] = str(new_message["_id"])
        del new_message["_id"]
        return new_message
