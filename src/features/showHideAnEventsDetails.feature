Feature: Show/Hide event details
 Scenario: An event element is collapsed by default
  Given the user opens the app
  When the event list is displayed
  Then all event elements should be collapsed by default
 Scenario: User can expand an event to see details
  Given the user sees a list of events
  When the user clicks on an event
  Then the event details should be displayed
 Scenario: User can collapse an event to hide details
  Given the user has expanded an event
  When the user clicks the hide details button
  Then the event details should be hidden