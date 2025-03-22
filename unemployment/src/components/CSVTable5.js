import React from "react";
import renderTable from "./renderTable"; // Your table rendering utility
import { Link } from "react-router-dom";


const CSVTable5 = () => {
  const tableData = ["/csv5.csv"]; // CSV data for this table

  return (
    <div>
      <h2>CSV Table 5</h2>
      {renderTable(tableData)}
      <Link to="/csv4">
              <button>Previous Table</button>
            </Link>
      <Link to="/csv1">
        <button>Back to Beginning</button>
      </Link>
      
    </div>
  );
};

export default CSVTable5;