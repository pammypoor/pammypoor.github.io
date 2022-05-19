import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import Home from './views/Home/Home';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path = "/" element = {<Home/>} exact/>
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App;
