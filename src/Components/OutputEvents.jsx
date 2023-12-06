import React from 'react';

const OutputEvents = ({ events, handleDeleteEvent }) => {
    return (
        <div>
            {events.map((event, index) => (
                <div key={index}>
                    <p>{event.taskId}, {event.date}, {event.task}, {event.status}</p>
                    <button onClick={() => { handleDeleteEvent(index) }}>X</button>
                </div>
            ))}
        </div>
    );
};

export default OutputEvents;