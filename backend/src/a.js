
const { DealExcel } = require('../util/index')
const path = require('path')

const dealExcel = new DealExcel({ path: path.resolve(__dirname, `./test.xlsx`) })
dealExcel.readFile()