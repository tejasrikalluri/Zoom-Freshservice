## Zoom - Concurrent Meetings

Zoom integration enables multiple agents to schedule concurrent Zoom meetings with customers.

### Files and Folders
    .
    ├── README.md                     A file for your future self and developer friends to learn about app
    ├── app                           A folder to put all files needed for frontend components
    │   ├── template.html                A landing page for the user to use the app
    │   ├── scripts                   JavaScript to handle app's frontend components business logic
    │   │   └── app.js
    │   └── styles                    A folder of all the styles for app
    │       ├── images                A folder to put all the images
    │       │   ├── icon.svg
    │       │   └── rocket.svg
    │       └── style.css
    ├── config                        A folder to hold all the app's configuration files
    │   └── iparams.json
    │   └── oauth_config.json
    └── manifest.json                 A JSON file holding meta data for app to run on platform

### Installation steps of APP
1. To integrate Zoom with Freshservice, go to Admin > Apps > Get more Apps. Then locate Zoom-Concurrent Meetings app in the app gallery and click on install.
2. To install Zoom in your Freshservice account, you need Zoom API Key and Zoom Secret Key.
a. To get these keys, go to https://developer.zoom.us/me/page and select API tab to find the API Key and Secret Key.
3. Now, you can view your Zoom-Concurrent Meetings widget right below the ticket sidebar in ticket details page.
4. Configure Agent’s Zoom Host ID to generate instant meeting URL (this Host ID will be associated with the agent and will be used for all future zoom meetings within Freshservice).
    a. Assign an Agent to the ticket
    b. Enter Agent’s zoom Host ID and click ‘Login’.
i. To get Host ID:
    1. Log in to your Zoom account (as admin)
    2. From left side tab click ‘ Users’ (under User Management)
    3. From the list of users displayed, click on the required user under ‘ Email/Name ID’ column
    4. From the URL get Zoom Host ID (EX: https://zoom.us/user/ xxxxxxxxxxxxxxxxxxxxx /profile )
    5. Click on Generate meeting URL to generate and copy zoom meeting URL in the ticket.
    6. Send the meeting URL to the customer. When the customer clicks on the URL, Zoom downloads and installs an applet on the customer’s system.
    7. Now, click on the meeting URL from the widget to start your zoom meeting.
    8. To generate a new meeting URL in the same ticket, click on Regenerate meeting URL
    9. For information on remote desktop control go to: https://support.zoom.us/hc/en-us/articles/201362673-Request-or-Give-Remote-Control?zcid=1231
    10. If a meeting is recorded, enter the 9 digits meeting ID (For ex, if the meeting URL generated is https://zoom.us/j/591932173, please enter 591932173) in the text box and click on Add Recording URL
    11. Recorded session URL will be copied to the ticket as a note
    12. Recorded session URL can be added as a private/public note by clicking on Add Private Note or Add Public Note
    13. For information on cloud recording go to: https://support.zoom.us/hc/en-us/articles/203741855-Cloud-Recording

### Description of the APP
Integrating Zoom with Freshservice improves agent’s communication with the customer by scheduling instant Zoom meeting. Using multiple host IDs associated with your Zoom account, agents can host concurrent Zoom meetings.
Note: To host concurrent meetings in your Freshservice account, you need to have Zoom Pro or higher plan.
Zoom integration allows support agents to resolve issues faster through direct interaction with the customer:
    * Generate Zoom meeting URL in ticket details page and send it to customer
    * Use audio, video, and screen sharing features for the better understanding of
    customer’s issue
    * Request remote control of customer’s screen
    * Record meeting and add recording links sent by Zoom in the ticket for future
    reference
    * Track meeting start and end time

### Changes done in this version
Oauth config for settings page was dynamic

