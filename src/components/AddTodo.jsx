import { GoPlus } from 'react-icons/go';
import './addTodo.scss';
const AddTodo = ({ handleChange, onSubmit, value }) => {
  return (
    <div className='add-task'>
      <input type='text' className='add-task__input' onChange={handleChange} value={value} />
      <button className='add-task__btn' onClick={onSubmit}>
        <GoPlus /> Add
      </button>
    </div>
  );
};

export default AddTodo;
