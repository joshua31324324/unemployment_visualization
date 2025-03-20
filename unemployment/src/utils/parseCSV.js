import Papa from "papaparse";

export const fetchCSVFiles = async (csvFiles) => {
  const tablesData = [];

  for (const file of csvFiles) {
    try {
      const response = await fetch(file); // Fetch each CSV file
      if (!response.ok) {
        throw new Error(`Failed to fetch ${file}`);
      }
      const csvText = await response.text(); // Read file as text

      const parsedData = Papa.parse(csvText, {
        header: true, // Treat first row as headers
        skipEmptyLines: true,
      });

      tablesData.push({
        fileName: file.split("/").pop(), // Extract file name
        headers: Object.keys(parsedData.data[0] || {}), // Get headers
        rows: parsedData.data, // Rows of data
      });
    } catch (error) {
      console.error(`Error fetching or parsing ${file}:`, error);
    }
  }

  return tablesData; // Return the table data
};
