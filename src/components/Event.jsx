import React, { useState } from "react";

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <li className="event">
            <h3>{event && event.summary}</h3>
            <h5>{event && event.location}</h5>
            <p>{event && (new Date(event.created)).toUTCString()}</p>
            {showDetails ? <p className="details">{event && event.description}</p> : null}
            <button
            className="details-btn"
            onClick={() => {
                showDetails ? setShowDetails(false) : setShowDetails(true)}}
            >
                    {showDetails ? "hide details" : "show details"}
            </button>
        </li>
    );
}

export default Event;