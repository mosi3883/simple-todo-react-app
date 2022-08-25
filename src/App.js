import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
const App = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks((prevTask) => {
      return [...prevTask, { id: uuidv4(), text: newTask, complete: false }];
    });
    setNewTask('');
  };

  const completeTask = (id) => {
    setTasks((prevTask) =>
      prevTask.map((task) => {
        if (task.id === id) {
          return { ...task, complete: true };
        } else {
          return task;
        }
      })
    );
  };

  const undoTask = (id) => {
    setTasks((prevTask) =>
      prevTask.map((task) => {
        if (task.id === id) {
          return { ...task, complete: false };
        } else {
          return task;
        }
      })
    );
  };

  const removeTask = (id) => {
    setTasks((prevTask) => prevTask.filter((task) => task.id !== id));
  };

  return (
    <div className='app'>
      <AddTodo handleChange={handleChange} onSubmit={addTask} value={newTask} />
      <TodoList
        tasks={tasks}
        removeTask={removeTask}
        completeTask={completeTask}
        undoTask={undoTask}
      />
    </div>
  );
};

export default App;
