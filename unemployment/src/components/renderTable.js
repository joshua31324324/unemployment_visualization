
    const renderTable = (table, index) => (
        <div key={index}>
        <h2>{table.fileName}</h2>
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
                    <td key={cellIndex}>{row[header]}</td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );

export default renderTable;