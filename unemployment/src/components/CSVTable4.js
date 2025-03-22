import React from "react";
import renderTable from "./renderTable"; // Your table rendering utility
import { Link } from "react-router-dom";

const CSVTable4 = () => {
  const tableData = ["/csv4.csv"]; // CSV data for this table

  return (
    <div>
      <h2>CSV Table 4</h2>
      {renderTable(tableData)}
      <Link to="/csv3">
              <button>Previous Table</button>
            </Link>
      <Link to="/csv5">
        <button>Next Table</button>
      </Link>
    </div>
  );
};

export default CSVTable4;