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
    setTasks((prevTask) => [...prevTask, { id: uuidv4(), text: newTask, complete: false }]);
    setNewTask('');
  };

  const completeTask = (id) => {
    setTasks((prevTask) =>
      prevTask.map((task) => (task.id === id ? { ...task, complete: true } : task))
    );
  };

  const undoTask = (id) => {
    setTasks((prevTask) =>
      prevTask.map((task) => (task.id === id ? { ...task, complete: false } : task))
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
