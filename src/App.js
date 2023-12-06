import React, { useState } from "react";
import './App.css';
import Table from "./Components/Table";
import HeaderInputs from "./Components/HeaderInputs";
import OutputCollection from "./Components/OutputCollection";
import OutputEvents from "./Components/OutputEvents";


function App() {
  const [tasks, setTasks] = useState([]); //Дела
  const [dates, setDates] = useState([]); //Даты
  const [statuses, setStatuses] = useState([]); //Статусы

  const [events, setEvents] = useState([]); //События

  const [newTask, setNewTask] = useState(""); //Новые задания
  const [newDate, setNewDate] = useState(""); //Новые даты
  const [newStatus, setNewStatus] = useState(""); //Новые статусы

  const addTask = () => { //Добавление задания
    if (newTask !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const addDate = () => { //Добавление даты
    if (newDate !== "") {
      setDates([...dates, newDate]);
      setNewDate("");
    }
  };

  const addStatus = () => { //Добавление статуса
    if (newStatus !== "") {
      setStatuses([...statuses, { status: newStatus }]);
      setNewStatus("");
    }
  };
  const handleChangeTask = (newValue, taskIndex) => { // Изменить задание
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex] = newValue;
    setTasks(updatedTasks);

    const updatedEvents = events.map((event) => {
      if (event.task === tasks[taskIndex]) {
        return { ...event, task: newValue };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  const handleChangeDate = (newValue, dateIndex) => { // Изменить дату
    const updatedDates = [...dates];
    updatedDates[dateIndex] = newValue;
    setDates(updatedDates);

    const updatedEvents = events.map((event) => {
      if (event.date === dates[dateIndex]) {
        return { ...event, date: newValue };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  const handleDeleteTask = (taskIndex) => { // Удаление задания
    const updatedTasks = [...tasks];
    const deletedTask = updatedTasks.splice(taskIndex, 1)[0];
    setTasks(updatedTasks);

    const updatedEvents = events.map((event) => {
      if (event.task === deletedTask) {
        return { ...event, task: null };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  const handleDeleteDate = (dateIndex) => { // Удаление даты
    const updatedDates = [...dates];
    const deletedDate = updatedDates.splice(dateIndex, 1)[0];
    setDates(updatedDates);

    const updatedEvents = events.map((event) => {
      if (event.date === deletedDate) {
        return { ...event, date: null };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  const handleDeleteStatus = (index) => { // Удаление статуса
    const updatedStatuses = [...statuses];
    const deletedStatus = updatedStatuses.splice(index, 1)[0];
    setStatuses(updatedStatuses);

    const updatedEvents = events.map((event) => {
      if (event.status === deletedStatus.status) {
        return { ...event, status: null };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  const handleDeleteEvent = (index) => { // Удаление события
    const updatedEvents = events.slice(); // Создаем копию массива events
    updatedEvents.splice(index, 1); // Удаляем событие по индексу
    setEvents(updatedEvents);
  };

  const handleStatusChange = (value, taskIndex, dateIndex) => { //Добавление события при изменении статуса
    const updatedStatuses = [...statuses];
    updatedStatuses[taskIndex][dateIndex] = value;
    setStatuses(updatedStatuses);

    const existingEventIndex = events.findIndex(
      (event) => event.task === tasks[taskIndex] && event.date === dateIndex
    );

    if (existingEventIndex !== -1) {
      const updatedEvents = [...events];
      updatedEvents[existingEventIndex].status = value;
      setEvents(updatedEvents);
    } else {
      const taskId = Math.floor(Math.random() * (100000 - 1) + 1);
      const event = {
        taskId: taskId,
        date: dateIndex,
        task: tasks[taskIndex],
        status: value
      };
      setEvents([...events, event]);
    }
  };

  return (
    <div className="container">
      <HeaderInputs
        addTask={addTask}
        newTask={newTask}
        setNewTask={setNewTask}
        addDate={addDate}
        newDate={newDate}
        setNewDate={setNewDate}
        newStatus={newStatus}
        setNewStatus={setNewStatus}
        addStatus={addStatus}
      />

      <OutputCollection
        tasks={tasks}
        dates={dates}
        statuses={statuses}
        handleDeleteDate={handleDeleteDate}
        handleDeleteStatus={handleDeleteStatus}
        handleDeleteTask={handleDeleteTask}
      />

      <OutputEvents
        events={events}
        handleDeleteEvent={handleDeleteEvent}
      />

      {tasks[0] || dates[0]
        ? <Table
          tasks={tasks}
          dates={dates}
          statuses={statuses}
          handleChangeTask={handleChangeTask}
          handleChangeDate={handleChangeDate}
          handleStatusChange={handleStatusChange}
        />
        : ''}
    </div>
  );
}

export default App;