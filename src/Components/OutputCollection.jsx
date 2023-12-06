import React from 'react';

const OutputCollection = ({ tasks, dates, statuses, handleDeleteDate, handleDeleteStatus, handleDeleteTask }) => {
    return (
        <div className="everyone">
            <div>
                {tasks.map((task, taskIndex) => {
                    return (
                        <div key={taskIndex}>
                            <p>{task}</p>
                            <button onClick={() => { handleDeleteTask(taskIndex) }}>X</button>
                        </div>
                    )
                })}
            </div>
            <div>
                {dates.map((date, dateIndex) => {
                    return (
                        <div key={dateIndex}>
                            <p>{date}</p>
                            <button onClick={() => { handleDeleteDate(dateIndex) }}>X</button>
                        </div>
                    )
                })}
            </div>
            <div>
                {statuses.map((status, index) => {
                    return (
                        <div key={index}>
                            <p>{status.status}</p>
                            <button onClick={() => { handleDeleteStatus(index) }}>X</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default OutputCollection;