import React, { useState, useEffect } from "react";
import renderTable from "./renderTable"; // Your table rendering utility
import { Link } from "react-router-dom";
import { fetchCSVFiles } from "../utils/parseCSV"; // Import your CSV parsing utility

const CSVTable1 = () => {

  const [tableData, setTableData] = useState([]); // Initialize tableData as an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCSVFiles("/csv1.csv"); // Fetch and parse the CSV file
        setTableData(data); // Save parsed data to state
      } catch (error) {
        console.error("Error loading CSV file:", error); // Handle errors gracefully
      }
    };

    fetchData(); // Fetch the data when the component mounts
  }, []);

  return (
    <div>
      <h2>CSV Table 1</h2>
      {renderTable(tableData)}
      <Link to="/csv5">
        <button>To End</button>
      </Link>
      <Link to="/csv2">
        <button>Next Table</button>
      </Link>
    </div>
  );
};

export default CSVTable1;