import React from 'react'
import './App.css';

import Navb from './components/Navb';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ListData from './components/ListData';
import AddData from './components/AddData';
import Home from './components/Home';



const App = () => {
  return (
    <div className=' text-center'>
      
     <Router>
     <Navb />
           <h4>Data-Govern</h4>

      <div>
        <Routes>
            <Route path="/" element={<Home/>} />
          <Route path="listdata" element={<ListData />} />
          <Route path="adddata" element={<AddData />} />

        </Routes>
      </div>

      </Router>
    </div>
  )
}

export default App

