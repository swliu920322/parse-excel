const XLSX = require('xlsx')
const workbook = XLSX.readFile('../backend/src/data.xlsx')
console.log(workbook);


