from fastapi.testclient import TestClient
from queries.messages import MessageRepository
from authenticator import authenticator
from main import app

client = TestClient(app=app)


def fake_get_current_account_data():
    return {}


class MockMessageRepository:
    def get_user_message_list(self, user_id: str):
        return {"messages": []}



def test_get_user_message_list():
    #arrange
    app.dependency_overrides[MessageRepository] = MockMessageRepository
    app.dependency_overrides[authenticator.get_current_account_data] = (
        fake_get_current_account_data
    )

    #act
    res = client.get("/account/{user_id}/messages")

    #assert
    assert res.status_code == 200
    assert res.json() == {
        'messages': []
    }

    #cleanup
    app.dependency_overrides = {}