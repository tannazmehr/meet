# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Show/Hide Event Details 

As a user, 
I should be able to toggle event details on or off 
So that I can choose between a quick event overview or more detailed information 

Specify Number of Events 

As a user, 
I should be able to specify the number of events displayed per page 
So that I can control how much information I see at once 

Use the App When Offline 

As a user, 
I should be able to access the app and view previously loaded events when offline 
So that I can check event details even without an internet connection 

Add an App Shortcut to the Home Screen 

As a user, 
I should be able to add a shortcut to the app on my home screen 
So that I can quickly open the app without searching for it 

Display Charts Visualizing Event Details 

As a user, 
I should be able to view charts that visualize event details 
So that I can easily understand event trends, statistics, or other insights 

 

 

 

 

 

 

 

 

 

 

 

 

 

Feature 1: 

Scenario: An event element is collapsed by default. 

  Given the user opens the app; 

  When the event list is displayed; 

  Then all event elements should be collapsed by default. 

  

Scenario: User can expand an event to see details. 

  Given the user sees a list of events; 

  When the user clicks on an event; 

  Then the event details should be displayed. 

  

Scenario: User can collapse an event to hide details. 

  Given the user has expanded an event; 

  When the user clicks on the event again; 

  Then the event details should be hidden. 

  

Feature 2: 

 Scenario: When user hasn’t specified a number, 32 events are shown by default. 

  Given the user hasn’t specified a number of events to display; 

  When the user opens the app; 

  Then the user should see a list of 32 events. 

  

Scenario: User can change the number of events displayed. 

  Given the user is viewing the event list; 

  When the user selects a different number of events; 

  Then the event list should update to show the selected number of events. 

  

Feature 3: 

 Scenario: Show cached data when there’s no internet connection. 

  Given the user has previously loaded event data; 

  And the user is offline; 

  When the user opens the app; 

  Then the user should see cached event data. 

  

Scenario: Show error when user changes search settings (city, number of events). 

  Given the user is offline; 

  When the user changes the search settings; 

  Then the user should see an error message. 

  

Feature 4: 

 Scenario: User can install the meet app as a shortcut on their device home screen. 

  Given the user is using a compatible browser; 

  When the user chooses to install the app; 

  Then the app should be added as a shortcut on their home screen. 

  

Feature 5:  

Scenario: Show a chart with the number of upcoming events in each city. 

  Given the user is on the event list screen; 

  When the user views the data visualization section; 

  Then the user should see a chart displaying the number of upcoming events per city. 

 