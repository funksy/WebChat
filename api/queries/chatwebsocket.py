from fastapi import WebSocket
from typing import List
import json

class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(
        self,
        websocket: WebSocket,
        messages: dict,
    ):
        await websocket.accept()
        self.active_connections.append(websocket)
        await self.send_message_history(
            messages,
            websocket,
        )

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def send_message_history(
        self,
        messages: dict,
        websocket: WebSocket,
    ):
        await websocket.send_json(messages)

    async def broadcast(self, message: str):
        payload = {
            "content": message,
            "type": 1,
        }
        print('active connections:', len(self.active_connections))
        for connection in self.active_connections:
            await connection.send_json(payload)


manager = ConnectionManager()