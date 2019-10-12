import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar'
// import Content from "./components/layout/Content";
import Landing from "./components/layout/Landing";
import Photos from "./components/jph/Photos";
import Search from "./components/jph/Search";
import Animations from "./components/jph/Animation";

function App() {
  return (
      <Provider store={ store }>
        <Router>
          <div className="wrapper">
              <Navbar/>
              <div id="content">
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                      <div className="container-fluid">
                          <button type="button" id="sidebarCollapse" onClick={
                              ()=>{
                                  var element = document.getElementById("sidebar");
                                  element.classList.toggle("active");
                              }
                          } className="btn btn-info">
                              <i className="fas fa-align-left"></i>
                              <span>Toggle Sidebar</span>
                          </button>

                      </div>
                  </nav>
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/photos" component={Photos}/>
                  <Route exact path="/search" component={Search}/>
                  <Route exact path="/animations" component={Animations}/>
              </div>
          </div>
        </Router>
      </Provider>
  );
}

export default App;
