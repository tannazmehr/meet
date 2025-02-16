import React, { useState } from "react";

const NumberOfEvents = ({ }) => {

    const [eventCount, setEventCount] = useState(32);

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setEventCount(value);
    }
    return (
        <div>
            <label htmlFor="number-of-events">Number of events: </label>
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