import React from "react";
import renderTable from "./renderTable"; // Your table rendering utility
import { Link } from "react-router-dom";
import { parseCSV } from "../utils/parseCSV"; // Import your CSV parsing utility
import { useState, useEffect } from "react";

const CSVTable2 = () => {
  const [tableData, setTableData] = useState(null); // State for table data
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await parseCSV("/csv2.csv"); // Fetch CSV1
        setTableData(data);
        setIsLoading(false); // Set loading to false once data is fetched
      };
  
      fetchData(); // Fetch the data when the component mounts
    }, []);

  return (
    <div>
      <h2>CSV Table 2</h2>
      <Link to="/csv1">
              <button>Previous Table</button>
            </Link>
      <Link to="/csv3">
        <button>Next Table</button>
      </Link>
      {isLoading ? <p>Loading...</p> : renderTable(tableData, 1, 10)}
    </div>
  );
};

export default CSVTable2;