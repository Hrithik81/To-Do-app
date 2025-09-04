import React, { useState } from "react";

export default function TaskForm({ onSave, onCancel }) {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    onSave({ title, time });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl font-semibold">Add Task</h3>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded-lg p-2"
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full border rounded-lg p-2"
      />
      <div className="flex gap-2">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Save</button>
        <button type="button" onClick={onCancel} className="bg-gray-300 px-4 py-2 rounded-lg">Cancel</button>
      </div>
    </form>
  );
}
