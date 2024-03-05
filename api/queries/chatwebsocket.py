from fastapi import WebSocket
from typing import List, Union
from pydantic import BaseModel
from .messages import MessageOut, MessageListOut


class Initializer(BaseModel):
    chat_history: MessageListOut
    active_users: List[str]


class SocketMessage(BaseModel):
    msg_type: str
    content: Union[MessageOut, Initializer]


class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(
        self,
        websocket: WebSocket,
        messages: list,
    ):
        await websocket.accept()
        self.active_connections.append(websocket)
        socket_message = SocketMessage(
            msg_type="initializer",
            content=Initializer(
                chat_history=MessageListOut(messages=messages),
                active_users=[
                    str(ws.client.port) for ws in self.active_connections
                ],
            ),
        )
        await self.private_message(
            socket_message,
            websocket,
        )

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def private_message(
        self,
        message: SocketMessage,
        websocket: WebSocket,
    ):
        await websocket.send_json(message.json())

    async def broadcast(self, socket_message: str):
        print("active connections:", len(self.active_connections))
        for connection in self.active_connections:
            await connection.send_json(socket_message.json())


manager = ConnectionManager()
