from fastapi import WebSocket, Depends
from typing import List, Union
from pydantic import BaseModel
from queries.messages import MessageOut, MessageIn, MessageRepository


class InitializationPayload(BaseModel):
    messages: List[MessageOut]
    users: List[str]


class UserStatusPayload(BaseModel):
    user_id: str
    status: str


class ChatMessagePayloadOut(BaseModel):
    action: str
    message: MessageOut


class ChatMessagePayloadIn(BaseModel):
    action: str
    message: MessageIn


class Packet(BaseModel):
    type: str
    payload: Union[
        InitializationPayload,
        UserStatusPayload,
        ChatMessagePayloadOut,
        ChatMessagePayloadIn,
    ]


class ConnectionManager:
    def __init__(
        self, message_repo: Depends(MessageRepository)
    ):  # ! Why does this work?
        self.active_connections: List[WebSocket] = []
        self.active_users: List[str] = []
        self.message_repo = message_repo

    async def connect(self, websocket: WebSocket, user_id: str):
        await websocket.accept()
        self.active_connections.append(websocket)
        self.active_users.append(user_id)

        await self.direct_message(
            websocket, self.create_initialization_packet()
        )
        await self.broadcast(
            self.create_user_status_packet(user_id, "connect")
        )

    async def disconnect(self, websocket: WebSocket, user_id: str):
        self.active_users.remove(user_id)
        self.active_connections.remove(websocket)
        await self.broadcast(
            self.create_user_status_packet(user_id, "disconnect")
        )

    async def broadcast(self, packet: Packet):
        for connection in self.active_connections:
            await connection.send_json(packet.json())

    async def direct_message(self, websocket: WebSocket, packet: Packet):
        await websocket.send_json(packet.json())

    def route_packet():
        pass

    def create_initialization_packet(self):
        messages = self.message_repo.get_room_message_list("1")["messages"]
        payload = InitializationPayload(
            messages=messages, users=self.active_users
        )
        return Packet(type="init", payload=payload)

    def create_user_status_packet(self, user_id: str, status: str):
        payload = UserStatusPayload(user_id=user_id, status=status)
        return Packet(type="user_status", payload=payload)

    def create_chat_message_packet(self, message: MessageIn):
        new_message = self.message_repo.create_message(MessageIn(**message))
        payload = ChatMessagePayloadOut(action="new", message=new_message)
        return Packet(type="message", payload=payload)


message_repo = MessageRepository()
manager = ConnectionManager(message_repo)
