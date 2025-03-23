import Papa from "papaparse";

// Utility to fetch and parse a single CSV file
export const parseCSV = async (filePath) => {
  try {
    // Fetch the CSV file
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${filePath}`);
    }

    // Read the file content as text
    const csvText = await response.text();

    // Parse the CSV content
    const parsedData = Papa.parse(csvText, {
      header: true, // Treat the first row as headers
      skipEmptyLines: true,
    });

    // Extract headers and rows
    const headers = parsedData.meta.fields || []; // meta.fields contains headers
    const rows = parsedData.data.map((row) => {
      const normalizedRow = {};
      headers.forEach((header) => {
        normalizedRow[header] = row[header] || "N/A"; // Handle missing fields
      });
      return normalizedRow;
    });

    // Return the table structure
    return {
      headers,
      rows,
    };
  } catch (error) {
    console.error(`Error parsing CSV file: ${filePath}`, error);
    return {
      headers: [],
      rows: [],
    }; // Return empty data in case of an error
  }
};
