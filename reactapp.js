import React, { useState } from 'react';
import './reactapp.css';

function ReactApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [editingTaskText, setEditingTaskText] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const startEditingTask = (index) => {
    setEditingTaskIndex(index);
    setEditingTaskText(tasks[index]);
  };

  const saveTask = () => {
    const updatedTasks = tasks.map((task, index) =>
      index === editingTaskIndex ? editingTaskText : task
    );
    setTasks(updatedTasks);
    setEditingTaskIndex(null);
    setEditingTaskText('');
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {editingTaskIndex === index ? (
              <span>
                <input
                  type="text"
                  value={editingTaskText}
                  onChange={(e) => setEditingTaskText(e.target.value)}
                />
                <button onClick={saveTask}>Save</button>
              </span>
            ) : (
              <span>
                {task}
                <button onClick={() => startEditingTask(index)}>Edit</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReactApp;
