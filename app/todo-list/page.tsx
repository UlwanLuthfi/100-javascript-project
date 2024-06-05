'use client';

import { Trash2 } from 'lucide-react';
import { useState } from 'react';

type Task = {
  taskId: number;
  taskName: string;
};

export default function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState('');

  function addTask() {
    if (!taskName) return;

    const newTask = { taskId: Date.now(), taskName };

    setTasks((prev) => [...prev, newTask]);
    setTaskName('');
  }

  function removeTask(taskId: number) {
    setTasks((prev) => prev.filter((task) => task.taskId !== taskId));
  }

  return (
    <div className="flex pt-20 min-h-screen justify-center bg-gradient-to-r from-indigo-500 to-blue-500">
      <div className="flex flex-col gap-5 w-[40%] min-w-[350px]">
        {/* New Task */}
        <div className="flex bg-white p-5 rounded-md justify-between gap-5">
          <input
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            type="text"
            placeholder="Task to be done..."
            className="w-[80%] h-12 border p-2 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
          <button
            onClick={() => addTask()}
            className="bg-blue-500 p-3 text-white rounded-md"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <div className="flex flex-col gap-5 bg-white p-5 rounded-md">
          {tasks.length === 0 && (
            <div className="text-center">
              <p>No tasks yet</p>
            </div>
          )}

          {tasks.map((task) => (
            <div
              key={task.taskId}
              className="flex items-center justify-between border-b pb-1"
            >
              <span className="p-2">{task.taskName}</span>
              <button onClick={() => removeTask(task.taskId)} className="bg-blue-500 p-3 text-white rounded-md">
                <Trash2 />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
