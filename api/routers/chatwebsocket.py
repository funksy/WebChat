from fastapi import APIRouter, WebSocket, WebSocketDisconnect, Depends
from queries.chatwebsocket import manager
from queries.messages import MessageRepository, MessageIn, MessageOut


router = APIRouter()


@router.websocket("/chat/{client_id}")
async def websocket_endpoint(
    websocket: WebSocket,
    client_id: str,
    repo: MessageRepository = Depends(),

):
    messages = repo.get_room_message_list("1")["messages"]
    for message in messages:
        message["timestamp"] = str(message["timestamp"])
    print(messages)
    await manager.connect(websocket, messages)
    try:
        while True:
            message = await websocket.receive_text()
            new_message = MessageIn(user_id=client_id, chatroom_id=1, content=message)
            repo.create_message(new_message)

            await manager.broadcast(message)
    except WebSocketDisconnect:
        manager.disconnect(websocket)
        await manager.broadcast("Disconnected", client_id)
