import { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import './addTodo.scss';
const AddTodo = ({ handleChange, onSubmit, value }) => {
  const [isValid, setIsValid] = useState(null);
  const handleAdd = () => {
    if (validateInput()) {
      setIsValid(true);
      onSubmit();
    } else {
      setIsValid(false);
    }
  };

  const validateInput = () => {
    const inp = value.trim();
    if (inp === '' || inp.length < 3) return false;
    return true;
  };
  return (
    <div className='add-task'>
      <input
        type='text'
        className='add-task__input'
        style={{ borderColor: isValid ? '' : 'rgba(255,0,0,0.3)' }}
        onChange={handleChange}
        value={value}
      />
      <button className='add-task__btn' onClick={handleAdd}>
        <GoPlus /> Add
      </button>
    </div>
  );
};

export default AddTodo;
