import React, {useState} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { FaBeer, FaFolder, FaInfo } from 'react-icons/fa';


import Projects from './Pages/Projects.js';
import Articles from './Pages/Articles.js';
import About from './Pages/About.js';
import Index from './Pages/Index.js';
import logo from './logo.svg';
import './App.css';
import {Menu, MenuItem, ProSidebar, SubMenu} from "react-pro-sidebar";

function App() {
  const [collapsed, setCollapsed] = useState(true);
  return (
      <BrowserRouter>
        <div className="App">

          <div  style={{position: "absolute", top: 0, left: 0, minHeight: "100vh", maxHeight: "100vh", height: "100%"}}>
            <ProSidebar collapsed={collapsed}>
              <Menu iconShape="square">
                <MenuItem style={{marginBottom: 30}}>
                  <a /*href="/ReactPageTest"*/ onClick={() => setCollapsed(!collapsed)}>
                    <img style={{ position: "absolute", left: 18, top: -10, color: "white"}} src={logo} className="logo" alt="Logo Image" />
                    <span style={{ position: "absolute", left: 58, top: 0, color: "white", width: 100}}> {collapsed ? "" : "Barnaby Jack"}</span>
                  </a>
                </MenuItem>
                <SubMenu title="My Technologies" icon={FaBeer()}>
                  <MenuItem><Link to="/projects" className="item">Project 1</Link></MenuItem>
                  <MenuItem><Link to="/projects" className="item">Project 2</Link></MenuItem>
                  <MenuItem>List all</MenuItem>
                </SubMenu>
                <SubMenu title="Projects" icon={FaFolder()}>
                  <MenuItem><Link to="/projects" className="item">Project 1</Link></MenuItem>
                  <MenuItem><Link to="/projects" className="item">Project 2</Link></MenuItem>
                  <MenuItem>List all</MenuItem>
                </SubMenu>
                <SubMenu title="About me" icon={FaInfo()}>
                  <MenuItem>Component 1</MenuItem>
                  <MenuItem>Component 2</MenuItem>
                </SubMenu>
              </Menu>
            </ProSidebar>
          </div>

          <div className="navigation">
            <div style={{display: "flex", justifyContent: "row"}}>
              <a href="/ReactPageTest" style={{position: "absolute", left:"20%",}}>
                <img src={logo} className="logo" alt="Logo Image" />
                <span style={{ position: "absolute", top: 11, color: "white", width: 100}}>Barnaby Jack</span>
              </a>
            </div>

            <div className="navigation-sub">
              <Link to="/projects" className="item">Projects</Link>
              <Link to="/articles" className="item">Articles</Link>
              <Link to="/about" className="item">About</Link>
            </div>
          </div>

          <div className="App-header">
            <Route exact path="/ReactPageTest" component={ Index } />
            <Route exact path="/projects" component={ Projects } />
            <Route path="/articles"       component={ Articles } />
            <Route path="/about"          component={ About } />
          </div>

        </div>
      </BrowserRouter>
  );
}

export default App;
