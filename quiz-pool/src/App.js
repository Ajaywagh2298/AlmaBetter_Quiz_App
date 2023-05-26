import './CSS/App.css';
import {Routes, Route} from "react-router-dom";
import DashboardHeaderComponents from "./Pages/Dashboard-Page";
import Modal from './Pages/Createquizcomponents/modal';
import React, { Component } from 'react'
//import McqSingle from './Pages/Createquizcomponents/mcqsingle';
export class App extends Component { 
  render() {
    return (
      <div>
        <DashboardHeaderComponents/>
        
        
        <Routes>
          <Route path="QuestionModal" element={<Modal/>}/>
        </Routes>
       
      </div>
    )
  }
}

export default App
