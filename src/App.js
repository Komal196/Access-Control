import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar.js'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import Admin from './components/Admin.js';
import AccessControl from './components/AccessControl.js';
import MiniDrawer from './components/MiniDrawer.js';
import SendEmail from './components/SendEmail.js';
import Delete from './components/Delete.js';

function App() {
  return (
    <>
    {/* <Sidebar/> */}
    <Router>
      <MiniDrawer />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        {/* Default route to home if no route is matched */}
        <Route path="/sendemail" element={<SendEmail />} />
        <Route path="/accesscontrol" element={<AccessControl />} />
        <Route path="/deleted" element={<Delete />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </>
   
  );
}

export default App;
