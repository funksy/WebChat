# Module3 Project Gamma

## Team:

- **Gary Burns** - Full-Stack Software Engineer
- **Elian Felix** - Full-Stack Software Engineer
- **John Lukich** - Full-Stack Software Engineer
- **David Sells** - Full-Stack Software Engineer
---
## Design

- [API design](docs/api_design.md)
- [Data model](docs/database_erd.png)
- [GHI](docs/GHI_wireframe.png)
- [Integrations](docs/Integrations.md)
- [Additional References](docs)

## Intended market

We are targeting a userbase who is looking for a simple real-time chat application without the bloat and unwanted functionality that exists on most current chat and social media applications. Chat app users will communicate with friends, family, and others all in a simple easy to use real-time chat app.

## Functionality

- User can create an account on the site that grants them access to the chat room.
- Users will be presented with a list of users who are active in the chat room, previous messages posted in the chat will be displayed with the name of the user who posted the message and the time the message was posted
- Users have a box to type new messages that includes error and spell checking and a submit button to post messages
- Users will have an avatar and a user id for their account
- In the future multiple chatrooms will be made available and include the ability for users to create new chatrooms and control user access to chatrooms they created.
- Stretch goals for adding functionality to the chat app include, pagination of message history that is displayed to users, user notifications and @notifications,

## Project Initialization

To fully enjoy this application on your local machine, please make sure to follow these steps:

1. Fork and clone the repository down to your local machine
2. CD into the new project directory
3. Clone the forked repository onto your local computer.
4. Build and run the project using Docker with these commands:
```

docker volume create mongo-data

docker-compose build

docker-compose up

```

- After running these commands, make sure all of your Docker containers are running
- View the project in the browser at: http://localhost:5173/
