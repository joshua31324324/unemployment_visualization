import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import renderTable from "./components/renderTable";
import { fetchCSVFiles } from "./utils/parseCSV";

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
    "/dummy.csv"
  ];

  // Fetch data inside useEffect
  const fetchData = async () => {
    const fetchedData = await fetchCSVFiles(csvFiles); // Call utility function
    setTableData(fetchedData); // Update state with fetched data
  };

  fetchData();
}, []); // Empty dependency array ensures it runs only once


  return (
    <div className="App">
    <div className="App-header">
    <img src={logo} className="App-logo" alt="logo"/>
    <div className="App-content">
      <h1>Unemployment Checker</h1>
      </div>
      {tableData.length === 0 ? (
        <p>Error loading CSV files. Please check the file paths.</p>
      ) : (
        tableData.map((table, index) => renderTable(table, index)) // Render each table
      )}
      </div>
    </div>
  );
}

export default App;
