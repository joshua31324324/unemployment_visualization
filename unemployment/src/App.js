import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import renderTable from "./components/renderTable";


function App() {

  const [tableData, setTableData] = useState([]);
  const csvFiles = ["./public/c-youth-unemployment-line-chart.csv", "./public/ca-lt-occ-emp-2022-2032.csv", "/public/laborforceandunemployment_annual_2024627.csv", "./public/Municipal_Fiscal_Indicators__Unemployment__2019.csv", "./public/Quarterly_Census_of_Employment_and_Wages__QCEW__Historical_Annual_Data__1975_-_2000.csv"];

  useEffect(() => {
    const fetchCSVFiles = async () => {
      const tablesData = [];

      for (const file of csvFiles) {
        try {
          const response = await fetch(file); // Fetch each CSV file
          if (!response.ok) {
            throw new Error(`Failed to fetch ${file}`);
          }
          const csvText = await response.text(); // Read file as text

          const parsedData = Papa.parse(csvText, {
            header: true, // Treat first row as headers
            skipEmptyLines: true,
          });

          tablesData.push({
            fileName: file.split("/").pop(), // Extract file name
            headers: Object.keys(parsedData.data[0] || {}), // Get headers
            rows: parsedData.data, // Rows of data
          });
        } catch (error) {
          console.error(`Error fetching or parsing ${file}:`, error);
        }
      }

      setTableData(tablesData); // Update state with all table data
    };

    fetchCSVFiles();
  }, [csvFiles]);
  return (
    <div>
      <h1>Import Multiple CSV Files</h1>
      {csvFiles.length === 0 ? (
        <p>Loading CSV files...</p>
      ) : (
        csvFiles.map((table, index) => renderTable(table, index))
      )}
    </div>
  );
}

export default App;
