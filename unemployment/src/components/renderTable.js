const renderTable = (table, index) => {
    // Validate the table object
    if (!table || !Array.isArray(table.headers) || !Array.isArray(table.rows)) {
      return (
        <div key={index}>
          <h2>Invalid or Missing Data</h2>
          <p>Could not render table due to missing or improperly formatted data.</p>
        </div>
      );
    }
  
    return (
      <div key={index}>
        <table>
          <thead>
            <tr>
              {table.headers.map((header, idx) => (
                <th key={idx}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {table.headers.map((header, cellIndex) => (
                  <td key={cellIndex}>
                    {row[header] !== undefined ? row[header] : "N/A"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default renderTable;