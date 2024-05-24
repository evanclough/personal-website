import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function App() {
  return (
    <div className="App">
      <Header/>
      <Tabs
        defaultActiveKey="profile"
        className="mb-3"
      >
        <Tab eventKey="profile" title="Profile">
          <Profile/>
        </Tab>
        <Tab eventKey="projects" title="Projects" className='app-tab'>
          <Projects/>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
