# Furious Chat

The project is an online chat.  Authenticated users will be able to participate in an active chat with other authenticated users.

Team:

- **Gary Burns**
- **Elian Felix**
- **John Lukich**
- **David Sells**

## Getting Started

<ins>**Make sure you have Docker, Git, and Node.js 20.11 or above**</ins>

1. Fork this repository

2. Clone the forked repository onto your local computer.

3. Build and run the project using Docker with these commands:

```
docker volume create mongo-data
docker-compose build
docker-compose up
```

- After running these commands, make sure all of your Docker containers are running

- View the project in the browser: http://localhost:5173/

## Design

### API Design

#### Messages

| Action | Method | URL | URL for Containers in Docker Network |
| -- |  -- | -- | -- |
| Create a message | POST | http://localhost:8000/messages | #coming soon
| Get a message | GET | http://localhost:8000/messages/{id} | #coming soon
| Get list of messages by chatroom | GET | http://localhost:8000/chatroom/{chatroom_id}/messages | #coming soon

#### Tokens

| Action | Method | URL | URL for Containers in Docker Network |
| -- |  -- | -- | -- |
| Login | POST | http://localhost:8000/token | #coming soon
| Logout | DELETE | http://localhost:8000/token | #coming soon

#### Accounts

| Action | Method | URL | URL for Containers in Docker Network |
| -- |  -- | -- | -- |
| Create account | POST | http://localhost:8000/accounts | #coming soon

### Data Model

#coming soon

### GHI

#coming soon

### Integrations (maybe, if we implement 3rd party API's)

## Functionality

- Visitors to the site will first be required to create a user account
- Once a user account is created, or a user logs in to a previously created account, they will be redirected to the chat page
- The chat page will display a log of messages, ordered by time/date of submission, with the most recent being displayed at the bottom of the chat window.
- Users can participate in the chat by typing and submitting their own message.
- The chat page will also display a list of users who are currently connected.  That list will automatically update when additional users connect or active users disconnect.