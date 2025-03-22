import React from "react";
import renderTable from "./renderTable"; // Your table rendering utility
import { Link } from "react-router-dom";

const CSVTable3 = () => {
  const tableData = ["/csv3.csv"]; // CSV data for this table

  return (
    <div>
      <h2>CSV Table 3</h2>
      {renderTable(tableData)}
      <Link to="/cvs2">
        <button>Previous Table</button>
      </Link>
      <Link to="/cvs4">
        <button>Next Table</button>
      </Link>
    </div>
  );
};

export default CSVTable3;