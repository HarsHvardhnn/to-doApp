
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [tasks, setTasks] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState('');
  const deleteTask = (id) => {
    let newTasks = tasks.filter((task) => task.id !==id);
    setTasks(newTasks);
  }
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  console.log(JSON.parse(localStorage.getItem('tasks')));
  },
   [tasks]);
  
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, { ...newTask, id: prevTasks.length + 1 }]);
  };
  // const addTask = (newTask) => { 
  //   const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
  //   setTasks((prevTasks) => [...prevTasks, { ...newTask }]);
  // };
  


  const startEditingTask = (taskId, taskText) => {
    setEditTaskId(taskId);
    setEditedTaskText(taskText);
  };

  const cancelEditingTask = () => {
    setEditTaskId(null);
    setEditedTaskText('');
  };


  const saveEditedTask = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === editTaskId ? { ...task, text: editedTaskText } : task
      )
    );
    setEditTaskId(null);
    setEditedTaskText('');
  };

  const value = {
    tasks,
    setTasks,
    setEditTaskId,
    editTaskId,
    editedTaskText,
    setEditedTaskText,
    toggleTaskCompletion,
    saveEditedTask,
    startEditingTask,
    cancelEditingTask,
    addTask,
    deleteTask
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;

}
