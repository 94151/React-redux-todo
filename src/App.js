import React from 'react';

import './App.css';
import Add from "../src/component/Add/index.js";
import List from "../src/component/List/index.js";
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Add />
      
    </div>
  );
}

export default App;
