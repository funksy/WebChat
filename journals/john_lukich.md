## 2024 03 21

Today I worked on:

-   Deploying the front end

Final mob. Our site is fully deployed and functions as expected. We still have some warnings that go to the console, probably related to how we initialize and close our WS connections, but not errors, and it works.

Today's a-ha moment was researching how Vite parses for the source for images and how to properly code them so that they survive the build process.

## 2024 03 20

Today I worked on:

-   A mostly completely draft of the README
-   Deploying our project

Mobby dick. We update our README to be mostly complete. We also started working on the deployment of our project to GitLab's servers. The database and the API were fairly trivial to complete, and are functional. The front-end deployment has been kicking our ass. There are a lot of details to be aware of that aren't explained very well in the related Learn card.

Today's a-ha moment was that we had a LOT of extraneous code that was still in our project from when we were in the planning stages. Glad we recognized it now instead of during grading. Will still need to look through it all again, however.

## 2024 03 19

Today I worked on:

-   Unit tests and final CSS styline

We are the mob. We wrote our unit tests and did some finishing touches on the styling. Writing the unit tests was interesting, given the time between reading the card and listening to the lecture. I had to rewatch the lecture (thank you 1.5x speed) in order to get it done, and also had to implement another endpoint as we only had 3 total that were not related to user authentication.

Today's a-ha moment has recognizing why it's a requirement to run pytest within the docker container and won't work using a terminal. If you are using an environment variable, the terminal will not have access to it and you will probably get a "KeyError" related to the line where you invoke that environment variable.

## 2024 03 18

Today I worked on:

-   Styling styling styling

Mob is us. We added several details, such as a timestamp which is visible when you hover over a mesage. Also, the icons have a background color that is an RGB value generated using the username associated with it. We also agreed on a font for the site.

Today's a-ha moment was using Tailwind CSS's "peer" property to apply styling to an element based on a psuedo-class (hover, in-focus, etc.) of a sibling element.

## 2024 03 14

Today I worked on:

-   Tightening up our styling

I am mob. We did a lot more styling work, as our MVP is very close to complete, and as a team we wanted to take it easy for a day before trying to tackle one of our more challenging stretch goals.

Today's a-ha moment was recognizing that JSX can be used to do a lot more logic than I had previously realized. We were able to apply styling conditionally in several instances.

## 2024 03 13

Today I worked on:

-   Finishing our implementation of Redux
-   Redirecting based on status of user
-   CSS styling

Mobby mob mob, we finalized the Redux implementation for our MVP. We additionally implemented redirection based on user status, and did a TON of CSS styling.

Today's a-ha moment was the CSS property "break", which controls how text within a div will or will not be broken up across multiple lines. Overly long chats were breaking our sizing/re-sizing.

## 2024 03 12

Today I worked on:

-   Redux
-   Websocket message handling

Mob mob mob, as usual. We finished establishing our base Redux installation. On top of that, we were able to actually make websocket connections from the front end, and set up logic to parse any data being sent over that connection. Currently, we're able to log in, log out, show the log of messages, send/receive new messages, and display a list of connected users.

Today's a-ha moment was that we could establish our "useWebSocket" hook with an argument that evaluated to false to prevent it from automatically attempting to connect. Then, through a useEffect, we could modify the value in the argument to make it evaluate to true and establish the connection. This is important, because we need the WS url to include the username, which is retrieved via an API call, so not immediately available.

## 2024 03 11

Today I worked on:

-   Redux

Mobbed it up, but today was a struggle. We decided to go backwards a bit and make the effort to get Redux stood up. We've now spent 2 days attempting to use the token endpoint from our backend to get the logged in user's username and save it as state. Definitely feeling a bit defeated at the moment.

Today's a-ha moment didn't exist. We spent the whole time fumbling around and not accomplishing much.

## 2024 03 07

Today I worked on:

-   Front end authentication, specifically a login, signup, and logout functionality

Mobbin like goblins, we created a login page, signup page, and a logout button. It took some time to figure out how to set the cookie after signing someone up, but looking through the code base for the authentication playground that is linked in the Learn card led us to just using the login hook after creating the new account.

Today's a-ha moment was that JWT-down isn't documented very well.

## 2024 03 06

Today I worked on:

-   Completed the rework of the websocket backend to include all of the expected functionality.

Mobbing and squading like the veterans we are... It was a nice moment when our rework of the websocket backend came up and was functional with minor poking and prodding.

Today's a-ha moment was understanding what "Depends()" does in the background (instantiates an instance of the class). That helped us to refactor slightly to correctly use it and not have a "hacky" workaround, instead.

## 2024 03 05

Today I worked on:

-   Planning and rewriting the websocket queries file to make it easier to send/recieve data we will need

Mobbing as usual, we planned the functionality we would need from our websocket manager so that it would be able to handle the functionality we intended to implement.

Today's a-ha moments was recognizing the benefit of upfront planning. We've done significantly more on this project that I have on other efforts, and while it requires upfront work, I can acknowledge the benefit of doing so.

## 2024 03 04

Today I worked on:

-   Created React components based on the HTML mockup
-   Relooked at the back end for Websockets

Still mobbing. We wrote React components to align with the HTML/CSS mockup we had previously made. We also looked at the websockets related code and discussed a refactor to better organize and name it.

Today's a-ha moment was using TailwindCSS and realizing the design pattern. Although the JSX isn't very pretty with all the tags written inline, it's very straightforward to use.

## 2024 03 01

Today I worked on:

-   Planned the structure of our websocket data
-   Created a mockup of the HTML

The entire team is still mob programming. We took some time to define a model for the data that will be sent over our websocket connections to ensure we would be able to simply run logic based on information within the payload. We also created colored block based mockups of the main pages for our site to establish a structure for the divs and flexboxes.

Today's a-ha moment was using the justify-content tag to place child elements at the bottom of the parent container.

## 2024 02 29

Today I worked on:

-   Websocket connection
-   Interfacing the websocket router with our database

The entire team is still mob programming. Getting the websocket connection established (based on an online example) and then modifying it to add messages to our database and to initially populate the message history on connection was very challenging.

Today's a-ha moment was realizing that we would need to send a list of all previous messages to our React component on initial Websocket connection if we wanted to populate it. Then, any additional messages are added to the database, but added to the message history state, rather than grabbing the entire list of messages again.

## 2024 02 28

Today I worked on:

-   API endpoints
-   Backend authentication
-   The README

The entire team mob programmed the above features. We mostly had success and didn't encounter many challenges

Today's a-ha moment was that pymongo's insert_one() mutates the data you pass as an argument, adding the "\_id" field if one isn't already present.
