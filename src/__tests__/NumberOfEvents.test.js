import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;

    beforeEach(() => {
        NumberOfEventsComponent = render(
            <NumberOfEvents
                currentNOE={32}
                setCurrentNOE={() => {}}
            />
        );
    });

    test('renders text input', () => {
        const numberOfTextBox = NumberOfEventsComponent.queryByRole('textbox');
        expect(numberOfTextBox).toBeInTheDocument();
        expect(numberOfTextBox).toHaveClass('number-of-events');
    });

    test('the default number is 32', async () => {
        const numberOfTextBox = NumberOfEventsComponent.queryByRole('textbox');
        expect(numberOfTextBox).toHaveValue('32');
    });

    test('updates the number of events when the user types', async () => {
        const numberOfTextBox = NumberOfEventsComponent.queryByRole('textbox');
        const user = userEvent.setup();
        await user.clear(numberOfTextBox);
        await user.type(numberOfTextBox, '22');
        expect(numberOfTextBox).toHaveValue('22')
    });

});