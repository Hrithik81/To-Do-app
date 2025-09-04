import React from "react";

export default function TaskList({ tasks }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <h3 className="text-lg font-semibold mb-3">Tasks</h3>
      {tasks.length === 0 ? (
        <p className="text-gray-400">No tasks yet</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task, i) => (
            <li key={i} className="p-3 rounded-lg bg-gray-100">
              <p className="font-medium">{task.title}</p>
              <p className="text-sm text-gray-500">{task.time}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
