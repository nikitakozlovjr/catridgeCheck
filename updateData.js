const XlsxPopulate = require('xlsx-populate');

// Load an existing workbook
XlsxPopulate.fromFileAsync("./catridgeData.xlsx")
    .then(workbook => {
        // Modify the workbook.
        // const value = workbook.sheet("Sheet1").value();

        // Log the value.
        console.log(workbook);
    });