import os
from pymongo import MongoClient


DB_URL = os.environ["DB_URL"]
client = MongoClient(DB_URL)


class Queries:
    @property
    def collection(self):
        db = client.chat_db
        return db[self.COLLECTION]
