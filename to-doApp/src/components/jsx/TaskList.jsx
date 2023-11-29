import React, { useEffect, useState } from 'react';
import '../styles/TaskList.css'
import NewTask from './NewTask';
import { useContext } from 'react';
import { AppContext } from '../../AppContex/AppContext';


const TaskList = () => {
const {deleteTask,tasks,toggleTaskCompletion,editTaskId,editedTaskText,setEditedTaskText,saveEditedTask,cancelEditingTask,startEditingTask} =useContext(AppContext);


      return ( <>
      <h2 className="header">Have a productive day!</h2>
<div className="task-list-container">
      {/* <NewTask onAddTask={addTask} /> */}
      <ul className="task-list">
        {tasks
          .slice() 
          .sort((task1, task2) => {
            const priorityOrder = { high: 1, medium: 2, low: 3 };
            return priorityOrder[task1.priority] - priorityOrder[task2.priority];
          }).map((task) => (
            <li key={task.id} className="task-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
              className="checkbox"
              />
            {editTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={editedTaskText}
                  onChange={(e) => setEditedTaskText(e.target.value)}
                  />
                <button onClick={saveEditedTask}>Save</button>
                <button onClick={cancelEditingTask}>Cancel</button>
              </>
            ) : (
              <>
                <span className={`task-text ${task.completed ? 'completed' : ''}`}>
                  {task.text.toUpperCase()}
                </span>
                <span className="task-priority">{task.completed?(''):('')}</span>
                <button onClick={() => startEditingTask(task.id, task.text)}>Edit</button>
                <button onClick={() => {deleteTask(task.id)}}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
        </>
  );
};

export default TaskList;
