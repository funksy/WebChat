from fastapi.testclient import TestClient
from main import app
from queries.messages import MessageRepository
from authenticator import authenticator

client = TestClient(app=app)


class FakeMessageRepository:
    def get_room_message_list(self, chatroom_id):
        return {"messages": []}


def fake_get_current_account_data():
    return {}


def test_get_room_message_list():
    app.dependency_overrides[MessageRepository] = FakeMessageRepository
    app.dependency_overrides[authenticator.get_current_account_data] = (
        fake_get_current_account_data
    )

    res = client.get("/chatroom/1/messages")
    assert res.status_code == 200
    assert res.json() == {"messages": []}
