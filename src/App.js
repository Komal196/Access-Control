import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar.js'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import Admin from './components/Admin.js';
import AccessControl from './components/AccessControl.js';
import MiniDrawer from './components/MiniDrawer.js';

function App() {
  return (
    <>
    {/* <Sidebar/> */}
    <MiniDrawer>
    <Routes>
     <Route path='/home' element={<Home/>}/>
     <Route path='/admin' element={<Admin/>}/>
     <Route path='/accessControl' element={<AccessControl/>}/>
    </Routes>
    </MiniDrawer>
    </>
   
  );
}

export default App;
