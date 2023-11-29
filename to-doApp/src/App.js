import logo from './logo.svg';
import './App.css';
import Navbar from './components/jsx/Navbar';
import TaskList from './components/jsx/TaskList';
import NewTask from './components/jsx/NewTask';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from './AppContex/AppContext';

function App() {

  
  return(
    <div className="App">
      <Navbar></Navbar>
      <Routes>
     
  
    <Route path='/newtask' element={<NewTask />}/>
     <Route path='/' element = { <TaskList  ></TaskList>}/>
 
     </Routes>
    
    </div>
  );
}

export default App;
