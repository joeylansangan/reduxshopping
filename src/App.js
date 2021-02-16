import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';

// // Pages
import Home from './pages/Home';

// Components
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Route exact path="/" component={Home} />
      </div>
    </Router>
  )
}

export default App;

