import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Projects from './Pages/Projects.js';
import Articles from './Pages/Articles.js';
import About from './Pages/About.js';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
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
            <Route exact path="/projects" component={Projects} />
            <Route path="/articles" component={Articles} />
            <Route path="/about" component={About} />
          </div>

        </div>
      </BrowserRouter>
  );
}

export default App;
