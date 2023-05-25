import './CSS/App.css';
import {Routes, Route} from "react-router-dom";
import DashboardHeaderComponents from "./Pages/Dashboard-Page";
import Modal from './Pages/Createquizcomponents/modal';
import React, { Component } from 'react'
import Common from './Pages/Createquizcomponents/common';
export class App extends Component { 
  render() {
    return (
      <div>
        <DashboardHeaderComponents/>
        <Common/>
        <Routes>
          <Route path="Dashboard-Header-Components" element={<DashboardHeaderComponents/>}/>
          <Route path="QuestionModal" element={<Modal/>}/>
        </Routes>
       
      </div>
    )
  }
}

export default App
