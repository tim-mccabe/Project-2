// STEP 1
// READING FROM CSV FILE
const tbody = d3.select("tbody");
d3.csv('static/js/full_data_set.csv').then(function(data){
    // First, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        const row = tbody.append("tr");
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
                let cell = row.append("td");
                cell.text(val);
            }
        );
    });
});
