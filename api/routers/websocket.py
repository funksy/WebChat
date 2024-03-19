from fastapi import APIRouter, WebSocket, WebSocketDisconnect, Depends
from queries.websocket import ConnectionManager

# from queries.messages import MessageRepository


router = APIRouter()

# db_repo = MessageRepository()
# manager = ConnectionManager(db_repo)


@router.websocket("/chat/{client_id}")
async def websocket_endpoint(
    websocket: WebSocket,
    client_id: str,
    manager: ConnectionManager = Depends(),
):
    await manager.connect(websocket, client_id)
    try:
        while True:
            incoming_packet = await websocket.receive_json()
            incoming_payload = incoming_packet["payload"]["message"]
            outgoing_packet = manager.create_chat_message_packet(
                incoming_payload
            )
            await manager.broadcast(outgoing_packet)
    except WebSocketDisconnect:
        await manager.disconnect(websocket, client_id)
