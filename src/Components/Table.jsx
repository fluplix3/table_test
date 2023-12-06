import React from 'react';

const Table = ({tasks, dates, statuses, handleChangeTask, handleChangeDate, handleStatusChange}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>{dates[0] && tasks[0] && 'Задачи / Даты'}</th>
                    {dates.map((date, dateIndex) => (
                        <th key={dateIndex}>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => handleChangeDate(e.target.value, dateIndex)}
                            />
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, taskIndex) => (
                    <tr key={taskIndex}>
                        <td>
                            <input
                                type="text"
                                value={task}
                                onChange={(e) => handleChangeTask(e.target.value, taskIndex)}
                            />
                        </td>
                        {dates.map((dateIndex) => (
                            <td key={dateIndex}>
                                <select
                                    value={statuses[taskIndex] && statuses[taskIndex][dateIndex]}
                                    onChange={(e) => handleStatusChange(e.target.value, taskIndex, dateIndex)}
                                >
                                    <option value="">Выберите статус</option>
                                    {statuses.map((status, index) => (
                                        <option key={index}>{status.status}</option>
                                    ))}
                                </select>
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table >
    );
};

export default Table;