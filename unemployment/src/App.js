import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import { fetchCSVFiles } from "./utils/parseCSV";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CSVTable1 from "./components/CSVTable1";
import CSVTable2 from "./components/CSVTable2";
import CSVTable3 from "./components/CSVTable3";
import CSVTable4 from "./components/CSVTable4";
import CSVTable5 from "./components/CSVTable5";

function App() {
  // Declare state at the top level
  const [tableData, setTableData] = useState([]);
  useEffect(() => {

  // List of CSV files
  const csvFiles = [
    "/c-youth-unemployment-line-chart.csv",
    "/ca-lt-occ-emp-2022-2032.csv",
    "/laborforceandunemployment_annual_2024627.csv",
    "/Municipal_Fiscal_Indicators__Unemployment__2019.csv",
    "/Quarterly_Census_of_Employment_and_Wages__QCEW__Historical_Annual_Data__1975_-_2000.csv",
  ];

  // Fetch data inside useEffect
  const fetchData = async () => {
    const fetchedData = await fetchCSVFiles(csvFiles); // Call utility function
    setTableData(fetchedData); // Update state with fetched data
  };

  fetchData();
}, []); // Empty dependency array ensures it runs only once


  return (
    <Router>
    <div className="App">
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo"/>
    <div className="App-content">
      <h1>Unemployment Checker</h1>
      </div>
    <Routes>
    <Route path="/csv1" element={<CSVTable1/>} />
    <Route path="/csv2" element={<CSVTable2/>} />
    <Route path="/csv3" element={<CSVTable3/>} />
    <Route path="/csv4" element={<CSVTable4/>} />
    <Route path="/csv5" element={<CSVTable5/>} />
      </Routes>
      <footer>
          <p>Use navigation to view more data.</p>
        </footer>
      </header>
    </div>
    </Router>
  );
}

export default App;
