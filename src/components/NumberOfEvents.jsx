import React, { useState } from "react";

const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => {

    const [eventCount, setEventCount] = useState(currentNOE);

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setEventCount(value);
        setCurrentNOE(value);
    }
    return (
        <div id="number-of-events">
            <label>Number of events: </label>
            <input
            type="text"
            className="number-of-events"
            value={eventCount}
            onChange={handleInputChanged}
            />
        </div>
    );

}

export default NumberOfEvents;