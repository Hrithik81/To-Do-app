import React from "react";

export default function Calendar({ selectedDate, setSelectedDate, tasks }) {
  const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i + 1));

  return (
    <div className="bg-white rounded-2xl shadow p-4 mb-4">
      <h2 className="text-xl font-bold text-center mb-4">
        {selectedDate.toLocaleString("default", { month: "long" })} {selectedDate.getFullYear()}
      </h2>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => {
          const dateKey = day.toDateString();
          const hasTasks = tasks[dateKey]?.length > 0;

          return (
            <button
              key={day}
              onClick={() => setSelectedDate(day)}
              className={`p-2 rounded-lg text-sm ${
                day.toDateString() === selectedDate.toDateString()
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {day.getDate()}
              {hasTasks && <span className="block w-2 h-2 mx-auto mt-1 rounded-full bg-green-500"></span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
