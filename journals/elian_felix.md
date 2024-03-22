## Feb 28, 2024

Today, I worked on:

* Finishing back end account creation and authentication with jwtdown - mob programming
* Back end message crud endpoints - mob programming

Today we discussed how we wanted to implement our endpoints for messages. For
example, We spoke briefly on how we should return the list of messages from the
database repo; should we convert it to a pydantic validation object right away, or
send it as the dictionary result and let the endpoint handle the formating of the
response body? We ended up deciding it was best to make repo methods return the
"raw data" to the endpoint as it seemed like a good idea.

Today's sponsored "a'ha" moment is brought to you by pymongo: I found out that when
using the insert_one pymongo method, it will add a new _id field to the input dict
that represents the newly created document object. It actually facilitated our return
of new messages after successful insertion, as we didn't have to do a find operation 
with the result id, unlike we initially thought we would have to.


## Feb 29, 2024

Today, I worked on:

* Websocket prototype implementation for the main chatroom - mob programming

Today we discussed ways to implement the websocket that will handle chat communication.
So far we have an idea that we probably want the websocket to manage all state the clients
get regarding the chat window, so for example: broadcast when users connect to chatroom,
send messages, disconnect from chatroom. Not only that but whenever a client first loads up
the chatroom view, instead of requesting some other http endpoint for a chat history,
this also should be obtained from the websocket as the first message after a successful connection.

Today's sponsored "a'ha" moment is brought to you by pydantic and fastapi: So when trying
to implement the "chat history" message the api would send a client when first connecting,
we had to include a list of our chat message objects in the websocket message payload,
at first we tried to use the already defined pydantic object for chat messages, thinking
that it is always implicitly converted to json when sent. Turns out this only works on
regular http fastapi endpoints, and so we had to change those to python dicts.


## Mar 1, 2024

Today, I worked on:

* Websocket message data structure ideation - mob programming
* Frontend html mock of of each page structure - mob programming

This was a somewhat uneventful day, where we mostly interfaced about what should our websocket
messaging scheme should look like and what types of messsages we should be able to send to the client.
After comming to an agreement on that, we then moved on to implementing a blocked out mockup of
each page that our application will be formed of, and messing around with the css took
most of our afternoon, so there's that.

Today's sponsored "a'ha" moment is brought to you by css flexbox model: The short of it is that
in our design we want to have the chat messages flow upward from the bottom of the chat window, 
as we defined the chat window as a flex container, the only way to get them to align at the bottom
was to use a property called "justify-content" which normally would operate on the x-axix,
but being a flex container in the column direction it seemingly flipped the x and y axis.


## Mar 4, 2024

Today, I worked on:

* Translate HTML mockup to react components - mob programming

So today we essentially worked on creating react components that adhere to the layout
that we had previously mocked in basic html and css. Also, we worked through finding
the right tailwind classes that would allow us to format our components in a way
that allows for some rezising of the browser window while keeping the "chat window"
as the biggest and focus element of the page.

Today's sponsored "a'ha" moment is brought to you by Tailwind: I just found out that
Tailwind allows you to add custom values to their predefined classes and that can be
done right inline. For example, you would set the height of a component with a predefined
class "h-#value" where value is a number (1-99) that represents a certain height increment
in px, but you can also add a custom value inline like so "h-[98px]"; so by adding
the custom value inside of square brackets as the class name basically allows you to write
short hand css properties, and I find that pretty neat, and something that is much harder
to achieve in a competitor like bootstrap.


## Mar 5, 2024

Today, I worked on:

* Planning and rewrite of the websocket connectionManager logic - mob programming

This day we accomplished the detailed design and implementation of the connectionManager
class that manages all communications between client-server and server-broadcast 
functionality. This also included pythonic class definitions of what we will send through
said websocket endpoint.

Today's sponsored "a'ha" moment is brought to you by fastAPI and Insomnia: problem:
fastAPI automated documentation doesn't track websocket endpoints. This is an issue for us
when it comes to testing the websocket without a frontend. Solution: this is where
Insomnia comes in to sav the day, as I found out today, It has the ability to create
websocket connections and behaves just the same as a frontend would (send and receive
json), and that works for our testing purposes for the near future until we get
our frontend properly started.


## Mar 6, 2024

Today, I worked on:

* Finish ConnectionManager implementation, websocket endpoint definition and testing  - mob programming

This day, our glorious mob finished the implemnetation of the connectionManager class
that manages all the websocket clients connected to our api to get chatroom updates
and send their own messages. We Added the necessary dependencies to connect to the database
and connected the endpoint to the main fastapi app. Towards the end of the day we also tested
our scheme of sending and recieving what we ended up calling "packets" through the 
websocket and so far everything works as we would expect.

Today's sponsored "a'ha" moment is brought to you by fastAPI: Today is all about the 
confusing syntax surrounding the Depends() dependency injection "class?", to keep it brief we
had some issues getting the dependency injection to work how we wanted (essentially 
endpoint <- connectionManager <- messsages_repo), and we had to spend considerable
time and effort to finally understand that all we really need to know is that, you 
only need to create a parameter with the name of your dependency and specify the type annotation
and default it to the Depends() class. This looks like "dependency_name: DependencyClass = Depends()"
and fastapi does all the setup in the background to set that up for you to use in the endpoint.


## Mar 7, 2024

Today, I worked on:

* Add login, signup and logout functionality to frontend - mob programming

Our glorious mob worked on a lot of functionality of the frontend react app this day.
We realized, we need another Galvanize library for the frontend authentication functionality,
and this was very fun to figure out essentially on our own as the documentation for
this frontend library isn't the best, much trial and error was had today thanks to this.

Today's sponsored "a'ha" moment is brought to you by jwtdown-for-react: Soooo,
The authentication process is a bit confusing at first, when you create your account
the backend sends you a valid authentication token, this doesn't get used by said library
at all. When you login the backend also sends you a valid authentication token as a response,
this also gets discarded, then for some reason, after successful login response, another
request gets triggered for the token info. This one last request sets a token state in react,
but no account info is saved, it is sent, but not saved, and I think this is an amazing feature.


## Mar 8, 2024

Today:

* More design work on the necessary frontend components - mob programming

Our glorious mob worked on: decided what our frontend components should have access to
(props, fetch, and hierarchy). After putting it down on paper and agreeing on all the
terms, we moved on to implementation, quickly ran into issues with the jwtdown-for-react
implementation of the session and were sharply interrupted by social hack hour.
After such interruption we all agreed it would be best to table the work in progress and
continue on next "working" day.

Today's sponsored "a'ha" moment is brought to you by Galvanize Social Hack Hour: 
I just learned that I don't know much about pop music, and this makes me warm and fuzzy
inside.


## Mar 11, 2024

Today:

* Trying and failing to get logged account information - mob programming

Our glorious mob worked on: Tough monday today, our fearless glorious mob failed
to properly query the logged in user account information from the login() jwtdown 
function. Turns out we all missed, multiple times, that this is an async function
and we were trying to call it like a syncronous function and that was driving us into
madness.

Today's sponsored "a'ha" moment is brought to you by the Glourious Mob: 
Mob programming is usually so fun! This time, our glorious mob, for the entirety
of today, failed to realize that we were trying to call an async function without the
await keyword and that resulted in multiple null returns and overall weirdness in the
login progress.


## Mar 12, 2024

Today:

* Completed happy path of our mvp - mob programming

We got so much work done today. Setup redux and all necessary functional slices,
also the apiSlice with the login/logout stuff. implemented the websocket with logic
to both send new messages and process the received types.

Today's sponsored "a'ha" moment is brought to you by fastAPI depends(): 
We figured out that depends() creates a new object every time an endpoint gets hit,
for us this is useless as we need the connectionManager(which is our dependency)
to persist from first request on. We had been experiencing some weirdness in our 
websocket behaviour after implementing the dependency as a Depends() call, this then
got solved after we changed back to making an instance outside of the endpoint and that
has solved the problem for now. Further investigation is required.


## Mar 13, 2024

Today:

* Refactor signup page implementation to rtk api endpoint - mob programming
* Add auth guard to mainpage and fix redirects - mob programming

Our glorious mob has basically completed mvp functionality today! We have essentially
converted all http fetching into rtk api calls, secured the mainpage(chatroom) and
implemented proper redirects. We also, worked on theming and coloring.

Today's sponsored "a'ha" moment is brought to you by ui design: 
Deciding on a color palette, ui layout and theming is hard. Doing that in a group is
even harder.


## Mar 14, 2024

Today:

* More ui styling adjustments- mob programming

Our glorious mob has done a lot of styling changes today, It is quite amazing how much time can
be spent moving divs around and messing with colors.


## Mar 18, 2024

Today:

* Even more styling - mob programming
* Minor bug fixing of the websocket manager class - mob programming
* Add some pseudo classes to our styling like on hover for buttons time of messages - mob programming

Today, our glorious mob has worked on further detailing our ui styling, fixing the dependency injection
in our backend websocket endpoint and adding some interactivity to our ui. For interactivity,
think of things like autoscroll to lastest message, highligh textfield when focused, and 
on hover effects like highlighting buttons or selectively showind time of message.

Today's sponsored "a'ha" moment is brought to you by textfield html element: 
In the effort of figuring out how to capture and use the enter key press to send new messages,
we encountered a minor visual glitch, whereas when hitting enter in a text field
generates a new line; Well, this new line doesn't go away even if you reset the value of
the field, so we ended up having add a conditional statement where we would check
the value of the key pressed event and if it is indeed an enter key press, override 
the default behaviour of the browser.


## Mar 19, 2024

Today:

* Even more styling - mob programming
* Logo redesign - mob programming
* unit testing api endpoints - mob programming

Today, our glorious mob has worked on further detailing our ui styling, adding overflow
scrollbars to the active user list to account for larger than the height lists of users,
and a new logo for our page that finally fits in with the rest of the page. Also, our 
app is from today onwards renamed to generiChat, to properly describe what our aim is.
We also worked on the unit test requirement. Let me tell you, fast api testing is so
great! I'm looking forward to writing these for even more things after today.

Today's sponsored "a'ha" moment is brought to you by fastapi unit testing: 
Long story short when implementing your unit tests make sure that:
a) you add the original dependencies to your test file
b) run your testing suite (pytesting) inside of your docker container


## Mar 20, 2024

Today:

* fleshing out the readme stuff - mob programming
* deployment of webapp - mob programming

Today, our glorious mob added all our design documents for our chat into the readme,
as well as, the layout and definition of our api endpoints, local build/run instructions,
and links to our respective gitlab profiles. Our glorious mob, also spent the better
half of the day working through the learn deployment cards and figuring out the 
necessary steps to build and deploy our application. The back end api is essentially
deployed now, some extra work is needed for the front end.

Today's sponsored "a'ha" moment is brought to you by vite: 
So I already mentioned how we are working on deploying the webapp into gitlab hosting,
and the deployment process is pretty straight forward for most of it, specially the
backend pipeline setup. The big issue we're having right now is that after doing all
the frontend setup steps according to learn cards, the page is currently not loading
the 'compiled' react js file, so that it is only showing a blank white page with no
elements in it. After a bunch of trial and error and researching the issue, we've come
into a realization that something is misconfigured in the vite config file that is
not outputting the right build files for a react application.


## Mar 21, 2024

Today:

* deployment of webapp - mob programming

Our glorious mob has come to the final stages of development in this application,
and today is the day that we have dealt with all the little bugs nad details of
building and deploying our application.

Today's sponsored "a'ha" moment is brought to you by glv-cloud-cli: 
After all our struggles of trial and erroring that was the creation of our build/deploy
pipeline, and the deployed webapp had been tested, Galv's own tool has determined itself
to ruin our experience. Whatever cloud environment they are using to manage the
deployed api/db container has decided to stop working on us. Is it a lack of funds
on their part? Did they decide a team only gets a couple minutes of runtime? We will
only find out after our assigned instructor gets back to answer our question, in the
mean time, we hope and remember the good old times of having a working deployed
application in the interwebs.
