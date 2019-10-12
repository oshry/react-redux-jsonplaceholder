import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar'
import Content from "./components/layout/Content";

function App() {
  return (
      <Provider store={ store }>
        <Router>
          <div className="wrapper">
            <Navbar/>
            <Content/>
          </div>
        </Router>
      </Provider>
  );
}

export default App;
