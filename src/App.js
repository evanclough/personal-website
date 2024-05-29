import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { useState } from 'react';
import { render } from '@testing-library/react';

function App() {
  const [activeTab, setActiveTab] = useState("profile");

  function renderActive(){
    switch(activeTab){
      case "profile":
        return <Profile/>
      case "projects":
        return <Projects/>
      default:
        return <Profile/>
    }
  }

  return (
    <div className="App">
      <div className=' mt-2 mb-4 nav-btngrp'>
        <ButtonGroup className = " mx-auto mb-2 ">
          <Button  onClick = {e => setActiveTab("profile")} className={activeTab === "profile" ? "active-nav-btn" : "inactive-nav-btn"}> Profile</Button>
          <Button onClick = {e => setActiveTab("projects")} className={activeTab === "projects" ? "active-nav-btn" : "inactive-nav-btn"}> Projects</Button>
        </ButtonGroup>
      </div>
      {renderActive()}
    </div>
  );
}

export default App;
