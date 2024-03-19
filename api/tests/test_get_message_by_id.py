from fastapi.testclient import TestClient
from datetime import datetime
from main import app
from authenticator import authenticator
from queries.messages import MessageRepository
from pydantic import BaseModel


fake_client = TestClient(app)


class AccountOut(BaseModel):
    id: str
    username: str


class FakeMessageRepo:
    def get_message(self, id):
        return {
            "id": "123",
            "user_id": "whateverman",
            "chatroom_id": "1",
            "content": "na",
            "timestamp": datetime(2024, 3, 19, 12, 4, 14, 15595),
        }


def fake_get_current_account_data():
    return AccountOut(id="whateverman", username="whateverman")


def test_get_message_by_id():
    # arrange
    app.dependency_overrides[authenticator.get_current_account_data] = (
        fake_get_current_account_data
    )
    app.dependency_overrides[MessageRepository] = FakeMessageRepo

    # act
    response = fake_client.get("/messages/123")

    # clean up
    app.dependency_overrides = {}

    # assert
    print(response.json())
    assert response.status_code == 200
    assert response.json() == {
        "id": "123",
        "user_id": "whateverman",
        "chatroom_id": "1",
        "content": "na",
        "timestamp": "2024-03-19T12:04:14.015595",
    }
