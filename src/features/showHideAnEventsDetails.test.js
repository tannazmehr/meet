import React from 'react'; 
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor, fireEvent } from '@testing-library/react';
import App from '../App';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        given('the user opens the app', () => {
            AppComponent = render(<App />);
        });

        when('the event list is displayed', async () => {
            AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
      
            await waitFor(() => {
              const EventListItems = within(EventListDOM).queryAllByRole('listitem');
              expect(EventListItems.length).toBe(32);
            });
      
        });

        then('all event elements should be collapsed by default', async () => {
          AppDOM = AppComponent.container.firstChild;
          const eventDetails = AppDOM.querySelector('.details');
          expect(eventDetails).not.toBeInTheDocument();
        });
    });

    test('User can expand an event to see details', ({ given, when, then }) => {
      let AppComponent;
      let AppDOM;
      given('the user sees a list of events', async () => {
        AppComponent = render(<App />);
        AppDOM = AppComponent.container.firstChild;
        const EventListDOM = AppDOM.querySelector('#event-list');
      
        await waitFor(() => {
            const EventListItems = within(EventListDOM).queryAllByRole('listitem');
            expect(EventListItems.length).toBe(32);
        });

      });

      when('the user clicks on an event', async () => {
        const user = userEvent.setup();
        AppDOM = AppComponent.container.firstChild;
        const showDetailsButtons = within(AppDOM).queryAllByText('show details');
        await user.click(showDetailsButtons[0]);
      });

      then('the event details should be displayed', async () => {
          AppDOM = AppComponent.container.firstChild;
          const eventDetails = AppDOM.querySelector('.details');
          expect(eventDetails).toBeInTheDocument();
        });
    });

    test('User can collapse an event to hide details', ({ given, when, then }) => {
      let EventComponent;
      let allEvents;
      given('the user has expanded an event', async () => {
        const user = userEvent.setup();
        allEvents = await getEvents();
        EventComponent = render(<Event event={allEvents[0]} />)
        const showDetails = EventComponent.queryByText('show details');
        await user.click(showDetails);
      });

      when('the user clicks the hide details button', async () => {
        const user = userEvent.setup();
        allEvents = await getEvents();
        EventComponent = render(<Event event={allEvents[0]} />)
        const hideDetails = EventComponent.queryByText('hide details');
        await user.click(hideDetails);
      });

      then('the event details should be hidden',async () => {
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
        const eventDetails = AppDOM.querySelector('.details');
        expect(eventDetails).not.toBeInTheDocument();
      });
    });

});