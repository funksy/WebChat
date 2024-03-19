from fastapi.testclient import TestClient
from queries.messages import MessageRepository
from main import app
from authenticator import authenticator

client = TestClient(app=app)


def fake_get_current_account_data():
    return {}


fake_data = {"user_id": "1", "chatroom_id": "1", "content": "Hello, world!"}


class FakeMessageRepository:
    def create_message(self, new_message):
        new_message = new_message.dict()
        new_message["timestamp"] = "2021-10-10T00:00:00.000000"
        new_message["id"] = "1"
        return new_message


def test_create_message():
    app.dependency_overrides[MessageRepository] = FakeMessageRepository
    app.dependency_overrides[authenticator.get_current_account_data] = (
        fake_get_current_account_data
    )
    result = client.post("/messages", json=fake_data)
    assert result.status_code == 200
    assert result.json() == {
        "user_id": "1",
        "chatroom_id": "1",
        "content": "Hello, world!",
        "timestamp": "2021-10-10T00:00:00",
        "id": "1",
    }
