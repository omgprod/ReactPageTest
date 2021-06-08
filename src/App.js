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
  const [collapsed, setCollapsed] = useState(false);
  return (
      <BrowserRouter>
        <div className="App">
          <div  style={{position: "absolute", top: 0, left: 0, minHeight: "100vh", maxHeight: "100vh", height: "100%"}}>
            <ProSidebar collapsed={collapsed}>
              <Menu iconShape="square">
                <MenuItem style={{marginBottom: 30}}>
                  <a onClick={() => setCollapsed(!collapsed)}>
                    <img style={{ position: "absolute", left: 18, top: -10, color: "white"}} src={logo} className="logo" alt="Logo Image" />
                    <span style={{ position: "absolute", left: 58, top: 0, color: "white", width: 100}}> {collapsed ? "" : "Barnaby Jack"}</span>
                  </a>
                </MenuItem>
                <SubMenu title="Mes Technologies" icon={FaBeer()}>
                  <MenuItem><Link to="/projects" className="item">Front-End</Link></MenuItem>
                  <MenuItem><Link to="/projects" className="item">Back-End</Link></MenuItem>
                  <MenuItem><Link to="/projects" className="item">Environment</Link></MenuItem>
                  <MenuItem><Link to="/projects" className="item">DEV-OPS</Link></MenuItem>
                  <MenuItem>List all</MenuItem>
                </SubMenu>
                <SubMenu title="Mes Projets Perso" icon={FaFolder()}>
                  <MenuItem><Link to="/projects" className="item">Derat'App</Link></MenuItem>
                  <MenuItem><Link to="/projects" className="item">Qr-Cartes</Link></MenuItem>
                  <MenuItem><Link to="/projects" className="item">Discord bot</Link></MenuItem>
                  <MenuItem><Link to="/projects" className="item">Grow my box</Link></MenuItem>
                  <MenuItem>List all</MenuItem>
                </SubMenu>
                <SubMenu title="About me" icon={FaInfo()}>
                  <MenuItem>Parcours</MenuItem>
                  <MenuItem>Diplomes</MenuItem>
                  <MenuItem>Référence</MenuItem>
                  <MenuItem>CV</MenuItem>
                </SubMenu>
              </Menu>
            </ProSidebar>
          </div>

          <div className="navigation">
            {collapsed ?<div style={{display: "flex", justifyContent: "row", marginLeft: collapsed ? 20 : 200}}>
              <a href="/" style={{position: "absolute", left:"20%",}}>
                <img src={logo} className="logo" alt="Logo Image" />
                <span style={{ position: "absolute", top: 11, color: "white", width: 100}}>Barnaby Jack</span>
              </a>
            </div> : null}

            {collapsed ?<div className="navigation-sub">
              <Link to="/projects" className="item">Projects</Link>
              <Link to="/articles" className="item">Articles</Link>
              <Link to="/about" className="item">About</Link>
            </div>: null}
          </div>

          <div className="App-header">
            <Route exact path="/ReactPageTest" component={ Index } />
            <Route exact path="/projects" component={ <Projects/> } />
            <Route path="/articles"       component={ Articles } />
            <Route path="/about"          component={ About } />
          </div>

        </div>
      </BrowserRouter>
  );
}

export default App;
