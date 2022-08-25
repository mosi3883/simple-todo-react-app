import './TodoList.scss';
import { GoTrashcan, GoCheck, GoReply } from 'react-icons/go';
const TodoList = ({ tasks, removeTask, completeTask, undoTask }) => {
  return (
    <div className='tasks'>
      {tasks.map((task) => (
        <div className={`task ${task.complete ? 'task--complete' : ''}`} key={task.id}>
          {task.text}
          <div className='task-btns'>
            {task.complete ? (
              <button className='undo-btn' onClick={() => undoTask(task.id)}>
                <GoReply />
              </button>
            ) : (
              <button className='complete-btn' onClick={() => completeTask(task.id)}>
                <GoCheck />
              </button>
            )}

            <button className='delete-btn' onClick={() => removeTask(task.id)}>
              <GoTrashcan />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
