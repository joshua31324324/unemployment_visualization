import React from "react";
import renderTable from "./renderTable"; // Your table rendering utility
import { Link } from "react-router-dom";

const CSVTable2 = () => {
  const tableData = ["/csv2.csv"]; // CSV data for this table

  return (
    <div>
      <h2>CSV Table 2</h2>
      {renderTable(tableData)}
      <Link to="/csv1">
              <button>Previous Table</button>
            </Link>
      <Link to="/csv3">
        <button>Next Table</button>
      </Link>
    </div>
  );
};

export default CSVTable2;