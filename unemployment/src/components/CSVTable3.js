import React, { useState, useEffect } from "react";
import renderTable from "./renderTable"; // Your table rendering utility
import { Link } from "react-router-dom";
import { parseCSV } from "../utils/parseCSV"; // Import your CSV parsing utility


const CSVTable3 = () => {
  const [tableData, setTableData] = useState(null); // State for table data
  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await parseCSV("/csv3.csv"); // Fetch CSV1
        setTableData(data);
        setIsLoading(false); // Set loading to false once data is fetched
      };
  
      fetchData(); // Fetch the data when the component mounts
    }, []);

  return (
    <div>
      <h2>CSV Table 3</h2>
      <Link to="/csv2">
        <button>Previous Table</button>
      </Link>
      <Link to="/csv4">
        <button>Next Table</button>
      </Link>
      {isLoading ? <p>Loading...</p> : renderTable(tableData, 1, 10)}
    </div>
  );
};

export default CSVTable3;