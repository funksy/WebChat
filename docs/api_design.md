## AUTHENTICATION

Authentication is performed using the hack reactor provided JWTDown authentication module. When a user creates an account from the signup page they are issued a Json Web Token that allows them to access the chat application and is used by the application for several purposes including authorization for the user to accesses the app provided websocket connections that are used for real-time chat functionality. The api uses the following endpoints to implement user authentication.
### Log in
* Endpoint path: /token
* Endpoint method: POST
* Request shape (form):
  * username: string
  * password: string
* Response: Account information and a token
* Response shape (JSON):
    ```json
    {
      "account": {
        key: type,
      },
      "token": string
    }
    ```

### Log out
* Endpoint path: /token
* Endpoint method: DELETE
* Headers:
  * Authorization: Bearer token
* Response: Always true
* Response shape (JSON):
    ```json
    true
    ```

### Sign-up
* Endpoint path: /Signup
* Endpoint method: POST
* Headers:
* N/A
* Request shape (JSON):
    ```json
    {
      "username": string,
      "password": string
    }
    ```
* Response: an indication of success or failure
* Response shape:
    ```json
    {
      "success": boolean
    }
    ```

## USER MANAGEMENT
The following endpoints are used to manage user accounts.
### List of users
* Endpoint path: /users
* Endpoint method: GET
* Query parameters:
  * N/A
* Headers:
  * Authorization: Bearer token
* Request shape (JSON):
  * N/A
* Response: List of users
* Response shape (JSON):
     ```json
    {
      "users": [
        {
          "_id": string,
          "username": string,
          "avatar_url": string,
        }
      ]
    }
    ```

### Delete a user
* Endpoint path: /users/{_id}
* Endpoint method: DELETE
* Query parameters:
  * N/A
* Headers:
  * Authorization: Bearer token
* Request shape (JSON):
  * N/A
* Response: an indication of success or failure
* Response shape:
    ```json
    {
      "success": boolean,
      "deletedCount": int
    }
    ```

## ROOM MANAGEMENT

The application will use the following endpoints to provide users a with the ability to create and manage access to their own chatrooms.
### Create a Room
* Endpoint path: /rooms
* Endpoint method: POST
* Query parameters:
  * N/A
* Headers:
  * Authorization: Bearer token
* Request shape (JSON):
    ```json
    {
      "name": string
    }
    ```
* Response: Creating a new chat room
* Response shape (JSON):
    ```json
    {
      "_id": string,
      "name": string
    }
    ```

### List of Rooms
* Endpoint path: /rooms
* Endpoint method: GET
* Query parameters:
* Headers:
  * Authorization: Bearer token
* Request shape (JSON):
  * N/A
* Response: List of rooms
* Response shape (JSON):
    ```json
    {
      "rooms": [
        {
          "_id": string
          "name": string
        }
      ]
    }
    ```

### Delete a Room
* Endpoint path: /rooms/{_id}
* Endpoint method: DELETE
* Query parameters:
  * N/A

* Headers:
  * Authorization: Bearer token

* Request shape (JSON):
  * N/A

* Response: Confirmation of room deletion

* Response shape (JSON):
    ```json
    {
      "success": boolean,
      "deletedCount": int
    }
    ```

## MESSAGE MANAGEMENT

The following endpoints will be used to manage the sending and receiving of messages by chat app users as well as providing users with a chatrooms message history when entering the chatroom
### Create a new Message

* Endpoint path: /rooms/{chatroom_id}/messages
* Endpoint method: POST

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "user_id": int
      "content": string
    }
    ```

* Response: An indication of success or failure
* Response shape:
    ```json
    {
      "message": string
    }
    ```

### Get list of messages

* Endpoint path: /rooms/{chatroom_id}/messages
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Request body:
  * N/A

* Response: A list of all messages in chat room
* Response shape:
    ```json
    {
      "messages": [
        {
          "_id": string,
          "user_id": string,
          "content": string,
          "timestamp": datetime
        }
      ]
    }
    ```

### Delete message

* Endpoint path: /rooms/{chatroom_id}/messages/{_id}
* Endpoint method: DELETE

* Headers:
  * Authorization: Bearer token

* Request body:
  * N/A

* Response: A list of all messages in chat room
* Response shape:
    ```json
    {
      "success": boolean,
      "deletedCount": int
    }
    ```

### Edit message

* Endpoint path: /rooms/{chatroom_id}/messages/{_id}
* Endpoint method: PUT

* Headers:
  * Authorization: Bearer token

* Request body:
  ```json
    {
      "content": string
    }
    ```

* Response: A list of all messages in chat room
* Response shape:
    ```json
    {
      "success": boolean,
      "deletedCount": int,
      "time_of_edit": datetime
    }
    ```
