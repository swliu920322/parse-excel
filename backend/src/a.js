const { DealExcel } = require('../util/index')
const path = require('path')

const dealExcel = new DealExcel({ path: path.resolve(__dirname, `./test.xlsx`) })
// dealExcel.readFile()
dealExcel.updateValue({
  'rowNumber': 1,
  'object': {
    'Target Due Date': '2024-09-20',
    'confirmed': true,
    'history': '2023-09-05 17:04:11 修改了 Target Due Date: 9/21/24 => 2024-09-20'
  },
  'sheetName': 'rootApp'
})