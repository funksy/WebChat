## AUTHENTICATION

Authentication is performed using the hack reactor provided JWTDown authentication module. When a user creates an account from the signup page they are issued a JSON Web Token that allows them to access the chat application and is used by the application for several purposes, including authorization for the user to access the page that initializes the websocket connections that are used for real-time chat functionality. The API uses the following endpoints to implement user authentication.

### Log in

-   Endpoint path: /token
-   Endpoint method: POST
-   Request shape (form):
    -   username: string
    -   password: string
-   Response: Account information and a token
-   Response shape (JSON):
    ```json
    {
        "access_token": "string",
        "token_type": "Bearer"
    }
    ```

### Log out

-   Endpoint path: /token
-   Endpoint method: DELETE
-   Headers:
    -   Authorization: Bearer token
-   Response: "true" if successful
-   Response shape (JSON):
    ```json
    true
    ```

### Get Token

-   Endpoint path: /token
-   Endpoint method: GET
-   Headers:
    -   Authorization: Bearer token
-   Response: Token and account information
-   Response shape (JSON):
    ```json
    {
        "access_token": "string",
        "token_type": "Bearer",
        "account": {
            "id": "string",
            "username": "string"
        }
    }
    ```

## USER MANAGEMENT

The following endpoints are used to manage user accounts.

### Get Account List

-   Endpoint path: /accounts
-   Endpoint method: GET
-   Headers:
    -   N/A
-   Request shape (JSON):
    -   N/A
-   Response: List of accounts
-   Response shape (JSON):
    ```json
    {
        "accounts": [
            {
                "id": "string",
                "username": "string"
            }
        ]
    }
    ```

### Create Account

-   Endpoint path: /accounts
-   Endpoint method: POST
-   Query parameters:
    -   N/A
-   Headers:
    -   N/A
-   Request shape (JSON):
    ```json
    {
        "username": "string",
        "password": "string"
    }
    ```
-   Response: Token and account information
-   Response shape:
    ```json
    {
        "access_token": "string",
        "token_type": "Bearer",
        "account": {
            "id": "string",
            "username": "string"
        }
    }
    ```

## MESSAGE MANAGEMENT

The following endpoints will be used to store messages which are sent by users and then provide them as a message history when users enter the chatroom and connect via Websocket

### Create Message

-   Endpoint path: /messages
-   Endpoint method: POST
-   Headers:
    -   Authorization: Bearer token
-   Request body:
    ```json
    {
        "user_id": "string",
        "chatroom_id": "string",
        "content": "string"
    }
    ```
-   Response: The message request body with a timestamp and id
-   Response shape:
    ```json
    {
        "id": "string",
        "user_id": "string",
        "chatroom_id": "string",
        "content": "string",
        "timestamp": "2024-03-20T13:57:30.317Z"
    }
    ```

### Get Room Message List

-   Endpoint path: /chatroom/{chatroom_id}/messages
-   Endpoint method: GET
-   Headers:
    -   Authorization: Bearer token
-   Request body:
    -   N/A
-   Response: A list of all messages for the indicated chatroom
-   Response shape:
    ```json
    {
        "messages": [
            {
                "id": "string",
                "user_id": "string",
                "chatroom_id": "string",
                "content": "string",
                "timestamp": "2024-03-20T13:59:04.377Z"
            }
        ]
    }
    ```

### Get Message

-   Endpoint path: /messages/{id}
-   Endpoint method: GET
-   Headers:
    -   Authorization: Bearer token
-   Request body:
    -   N/A
-   Response: The message with the indicated id
-   Response shape:
    ```json
    {
        "id": "string",
        "user_id": "string",
        "chatroom_id": "string",
        "content": "string",
        "timestamp": "2024-03-20T14:00:14.575Z"
    }
    ```

### Get User Message List

-   Endpoint path: /account/{user_id}/messages
-   Endpoint method: GET
-   Headers:
    -   Authorization: Bearer token
-   Request body:
    -   N/A
-   Response: A list of messages for the indicated user
-   Response shape:
    ```json
    {
        "messages": [
            {
                "id": "string",
                "user_id": "string",
                "chatroom_id": "string",
                "content": "string",
                "timestamp": "2024-03-20T14:01:53.985Z"
            }
        ]
    }
    ```
