import React, { useState } from "react";
import Calendar from "./components/Calendar";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

export default function App() {
  const [tasks, setTasks] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showForm, setShowForm] = useState(false);

  const addTask = (task) => {
    const dateKey = selectedDate.toDateString();
    setTasks((prev) => ({
      ...prev,
      [dateKey]: [...(prev[dateKey] || []), task],
    }));
    setShowForm(false);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <div className="w-full md:w-1/2 p-4">
        <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} tasks={tasks} />
        <TaskList tasks={tasks[selectedDate.toDateString()] || []} />
        <button
          onClick={() => setShowForm(true)}
          className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
        >
          +
        </button>
      </div>
      {showForm && (
        <div className="w-full md:w-1/2 p-6 bg-white shadow-lg">
          <TaskForm onSave={addTask} onCancel={() => setShowForm(false)} />
        </div>
      )}
    </div>
  );
}
