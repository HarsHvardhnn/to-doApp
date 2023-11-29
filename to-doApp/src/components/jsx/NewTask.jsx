import React, { useState } from 'react';
import '../styles/NewTask.css'
import { useContext } from 'react';
import { AppContext } from '../../AppContex/AppContext';

const NewTask = () => {
  const { addTask } = useContext(AppContext);
  const [newTaskText, setNewTaskText] = useState('');
  const [Priority ,setPriority] = useState('low');

  

  const handleInputChange = (e) => {
    setNewTaskText(e.target.value);
  };
  const handlePriority = (e) => {
    setPriority(e.target.value);
  }
const handleAddTask = () => {
    if (newTaskText.trim() !== '') {
      const newTask = {
        text: newTaskText,
        priority: Priority,
      };

      addTask(newTask);

      setNewTaskText('');
      setPriority('low');
    }
   

  };


  return ( <> 
    <div className='taskMaker'>
      <input className='new-task-input'
        type="text"
        placeholder="Add a new task"
        value={newTaskText}
        onChange={handleInputChange}
        /> 
      <select className= 'new-task-priority-select' value={Priority} onChange={handlePriority}>
      <option value="low">Low Priority</option>
      <option value="medium">Medium Priority</option>
      <option value="high">High Priority</option>
    </select>
  
      <button className='new-task-button ' onClick={handleAddTask}>Add Task</button>
    </div>
    <h1 className='texter'>Tasks with higher priority appear at the top</h1>
        </>
  );
};

export default NewTask;
