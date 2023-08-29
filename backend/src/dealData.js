const { DealExcel } = require('../util/index')

const dealExcel = new DealExcel({ path: './data.xlsx' })
dealExcel.readFile()
console.log(dealExcel.workBook)
const ExcelJS = require('exceljs');

async function start() {
  const workbook = new ExcelJS.Workbook();
  const worksheet = await workbook.xlsx.readFile('./data.xlsx');

  // console.log(worksheet)
}

//
// start()