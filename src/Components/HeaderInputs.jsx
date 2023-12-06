import React from 'react';

const HeaderInputs = ({addTask, newTask, setNewTask, addDate, newDate, setNewDate, newStatus, setNewStatus, addStatus}) => {
    return (
        <div className="header_inputs">
            <input
                type="text"
                placeholder="Добавить задачу"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Добавить</button>
            <input
                type="date"
                placeholder="Добавить дату"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
            />
            <button onClick={addDate}>Добавить</button>
            <input
                type="text"
                placeholder="Добавить статус"
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
            />
            <button onClick={addStatus}>Добавить</button>
        </div>
    );
};

export default HeaderInputs;