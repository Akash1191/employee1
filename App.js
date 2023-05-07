import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Employee from './Components/Employee';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className='color'>
     <Navbar />
      
      <Routes>
        <Route path="/employee" element={<Employee/>} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
