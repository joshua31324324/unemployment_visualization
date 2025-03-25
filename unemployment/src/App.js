import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import CSVTable1 from "./components/CSVTable1";
import CSVTable2 from "./components/CSVTable2";
import CSVTable3 from "./components/CSVTable3";
import CSVTable4 from "./components/CSVTable4";
import CSVTable5 from "./components/CSVTable5";

function App() {

  return (
    <Router>
    <div className="App">
    <div className="spinBackground">
    <header className="App-header">
    <Navigation />
    </header>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/csv1" element={<CSVTable1/>} />
    <Route path="/csv2" element={<CSVTable2/>} />
    <Route path="/csv3" element={<CSVTable3/>} />
    <Route path="/csv4" element={<CSVTable4/>} />
    <Route path="/csv5" element={<CSVTable5/>} />
      </Routes>
      <footer>
          <p>Use the navigation bar at the top of the screen to view slideshow.</p>
        </footer>
        </div>
    </div>
    </Router>
  );
}

export default App;
