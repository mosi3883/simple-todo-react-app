import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const App = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks((prevTask) => {
      return [...prevTask, { id: uuidv4(), text: newTask }];
    });
    setNewTask('');
  };

  const removeTask = (id) => {
    setTasks((prevTask) => prevTask.filter((task) => task.id !== id));
  };
  return (
    <div className='main'>
      <div className='addTask'>
        <input type='text' onChange={handleChange} value={newTask} />
        <button onClick={addTask} className='add-task-btn'>
          Add task
        </button>
      </div>
      <div className='tasks'>
        {tasks.map((task) => (
          <div className='task' key={task.id}>
            {task.text}
            <button className='delete-btn' onClick={() => removeTask(task.id)}>
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
