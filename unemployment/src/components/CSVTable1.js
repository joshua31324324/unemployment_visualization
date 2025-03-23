import React, { useState, useEffect } from "react";
import renderTable from "./renderTable"; // Your table rendering utility
import { Link } from "react-router-dom";
import { parseCSV } from "../utils/parseCSV"; // Import your CSV parsing utility

const CSVTable1 = () => {

  const [tableData, setTableData] = useState(null); // State for table data
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await parseCSV("/csv1.csv"); // Fetch CSV1
      setTableData(data);
      setIsLoading(false); // Set loading to false once data is fetched
    };

    fetchData(); // Fetch the data when the component mounts
  }, []);

  
  return (
    <div>
      <h2>CSV Table 1</h2>
      {isLoading ? <p>Loading...</p> : renderTable(tableData, 0, 10)}
      <Link to="csv5">
        <button>To End</button>
      </Link>
      <Link to="csv2">
        <button>Next Table</button>
      </Link>
    </div>
  );
};

export default CSVTable1;