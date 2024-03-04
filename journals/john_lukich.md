## 2024 03 01

Today I worked on:

* Planned the structure of our websocket data
* Created a mockup of the HTML

The entire team is still mob programming.  We took some time to define a model for the data that will be sent over our websocket connections to ensure we would be able to simply run logic based on information within the payload.  We also created colored block based mockups of the main pages for our site to establish a structure for the divs and flexboxes.

Today's a-ha moment was using the justify-content tag to place child elements at the bottom of the parent container.

## 2024 02 29

Today I worked on:

* Websocket connection
* Interfacing the websocket router with our database

The entire team is still mob programming.  Getting the websocket connection established (based on an online example) and then modifying it to add messages to our database and to initially populate the message history on connection was very challenging.

Today's a-ha moment was realizing that we would need to send a list of all previous messages to our React component on initial Websocket connection if we wanted to populate it.  Then, any additional messages are added to the database, but added to the message history state, rather than grabbing the entire list of messages again.


## 2024 02 28

Today I worked on:

* API endpoints
* Backend authentication
* The README

The entire team mob programmed the above features.  We mostly had success and didn't encounter many challenges

Today's a-ha moment was that pymongo's insert_one() mutates the data you pass as an argument, adding the "_id" field if one isn't already present.