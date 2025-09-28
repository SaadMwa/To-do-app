import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState(""); 

  const addTask = () => {
    if (!task.trim()) return;
    setTasks(prev => [...prev, { text: task.trim(), completed: false }]);
    setTask("");
  };

  const toggle = (index) => {
    setTasks(prev => {
      const next = [...prev];
      next[index] = { ...next[index], completed: !next[index].completed }; 
      return next;
    });
  };

  const deleteTask = (index) => {
    setTasks(prev => prev.filter((_, i) => i !== index));
  };

  const saveEdit = (index) => {
    if (!editText.trim()) return;
    setTasks(prev => {
      const next = [...prev];
      next[index] = { ...next[index], text: editText.trim() }; 
      return next;
    });
    setEditIndex(null);
    setEditText("");
  };

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) setTasks(parsed);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <h1>Todo-app</h1>

      <div className="input-container">
        <input
          type="text"
          className="input-box"
          placeholder="Enter your Task here"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn" onClick={addTask}>Add Task</button>
      </div>

      <ul>
        {tasks.map((t, i) => (
          <li key={i} className="task-item">
       {editIndex === i ? (
  <>
    <input
      type="text"
      className="edit-input"
      value={editText}
      onChange={(e) => setEditText(e.target.value)}
    />
    <div className="edit-btn-container">
      <button className="save-btn" onClick={() => saveEdit(i)}>Save</button>
      <button className="cancel-btn" onClick={() => { setEditIndex(null); setEditText(""); }}>Cancel</button>
    </div>
  </>
) : (
  <>
    <span className={t.completed ? "task-text strike" : "task-text"}>
      {t.text}
    </span>
    <div className="task-buttons">
      <button className="delete-btn" onClick={() => deleteTask(i)}>Delete</button>
      <button className="done-btn" onClick={() => toggle(i)}>{t.completed ? "Undo" : "Done"}</button>
      <button className="edit-btn" onClick={() => { setEditIndex(i); setEditText(t.text); }}>Edit</button>
    </div>
  </>
)}

          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
