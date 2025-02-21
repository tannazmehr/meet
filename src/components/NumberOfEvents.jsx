import React, { useState } from "react";

const NumberOfEvents = ({ currentNOE, setCurrentNOE, setErrorAlert }) => {

    const [eventCount, setEventCount] = useState(currentNOE);

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setEventCount(value);

        let errorText;
        if (isNaN(value) || value <= 0) {
            errorText = "You can only use numbers bigger than 0."
        }else{
            errorText = ""
            setCurrentNOE(value);
        }
        setErrorAlert(errorText);

    }
    return (
        <div id="number-of-events">
            <label htmlFor="No-Of-Events">Number of events: </label>
            <input
            type="text"
            id="No-Of-Events"
            className="number-of-events"
            value={eventCount}
            onChange={handleInputChanged}
            />
        </div>
    );

};

export default NumberOfEvents;