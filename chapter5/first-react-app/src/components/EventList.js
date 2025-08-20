import './Modal.css';
import React from 'react';
export default function EventList({events, handleClick}) {
    return (
        <div className="eventList">
            {events.map((event, index) => (
                    <React.Fragment key={event.id}>
                    <h2>{index} - {event.title}</h2>
                    <button onClick={() => handleClick(event.id)}>Delete item</button>
                    </React.Fragment>
                ))}
        </div>
    )
}
