# 27FEB24

started group project by creating group called "The Furious Five" on git lab and forking, then cloning the repository to my computer. We modified the provided docker compose YAML file to add mongo db, mongo express, and reflect the changes for out database.

Created a database feature branch, did an add/commit on the database branch, and merged it to the main branch

We then started working on backend authentication using the galvanize jwtdown authentication module. Added jwtdown-fastapi to requirements.txt file and started coding the authentication feature.

# 28 Feb 24
group did standup, no issues noted. finished most of backend authentication, finished endpoints for messages, tested login, logout, message create, and authentication all worked, created journal files and draft readme file for project. merged to main

# 29 Feb 24

did stand up decided to create project roadmap and created it with the broad strokes to then create git issues from. then proceeded to do learn module on websockets as a group with the intent to learn about and develop a prototype websocket for user chat functions. created issue for websocket prototyping

# 1 MAR 24

created html and css templates, decided how to handle web socket traffic, did a mockup of react components.

# 4 MAR 24
created react components from html/css templates and continued to work on websocket configuration. need to ask riley question about websockets in the morning

# 5 MAR 24
Asked Riley for advice on implementing websocket class and method design and he said simplest is best. group did flowchart and list of classes and methods for websockets in api configuration and implemented the queries side of class and method for websocket traffic in code with plans to code the routers side tomorrow. I will reach out for assistance on understanding the overall signal flow of websocket connections and how the websocket is managed by fastapi and react on the front and back end.

# 6 MAR 24
Finished redesign and implementation of websockets and successfully tested websocket functionality. Installed redux dependencies and start figuring out how to implement frontend design using react and redux. decided to start designing frontend with react with plans to implement redux after, mostly due to lack of familiarity with redux

# 7 MAR 24

Continued frontend design with react. Group decided to create a design diagram of react components and their associated states and fetches. Ran into a tough problem with the frontend react components not receiving  the fastapi jwtdown token. Troubleshot for a couple of hours and decided to research the issue over the weekend and return to it on Monday.  As a group we are finding a lot of value in taking the time to design and diagram out our code before actually starting to code.


# MAR 11

Decided to implement REDUX in front end. Ran into the issues with the authentication token being sent to the frontend in a null state. troubleshot and agreed to return to the issue tomorrow after doing further research.

# MAR 12

We were able to resolve the issue with the authentication issue by adjusting a couple of class and function names in redux. After researching further we also decided to implement the RTK query functionality provided by redux. Implemented the websocket and messages, etc., in the websocket payload. Created a chatlog slice for message traffic to and from react components

# MAR 13

Continued styling website and adjusting components.

# MAR 14


Continued styling websites and adjusting components

# MAR 18

Continued styling websites and adjusting components

# Mar 19

Continued styling websites and adjusting components


# MAR 20

Continued styling websites and adjusting components

# MAR 21

Prepared site for deployment by following the steps in the CI/CD learn card
Ran into a couple of issues

