const XLSX = require('xlsx')
const Excel = require('exceljs')

function getKeyIndex(worksheet) {
  let headers = worksheet.getRow(1).values
  return Object.entries(headers).reduce((r, cur) => {
    const [index, key] = cur
    return {
      ...r,
      [key]: Number(index)
    }
  }, {})
}

class DealExcel {
  workBook = {}
  path = ''
  data = {}

  constructor({ path = '' }) {
    this.path = path
  }

  readFile(filePath = '') {
    this.workBook = XLSX.readFile(filePath || this.path, { type: 'string' })
    const { Sheets, SheetNames } = this.workBook
    const data = {}
    SheetNames.forEach((name) => {
      data[name] = XLSX.utils.sheet_to_json(Sheets[name], {
        raw: false,
        dateNF: 'yyyy-MM-dd'
      })
    })
    this.data = data
  }

  async updateValue({ rowNumber = 3, sheetName = 'data', object = {} }) {
    let workbook = await new Excel.Workbook().xlsx.readFile(this.path)
    let worksheet = workbook.getWorksheet(sheetName)
    let row = worksheet.getRow(rowNumber + 1)
    const keyIndexMap = getKeyIndex(worksheet)
    Object.entries(object).forEach(([key, value]) => {
      const index = keyIndexMap[key]
      if (index >= 0) {
        const cell = row.getCell(index)
        cell.value = value
      } else {
        const newRow = worksheet.getRow(1)
        newRow.getCell(newRow.actualCellCount + 1).value = key
        row.getCell(newRow.actualCellCount).value = value
      }
    })
    row.commit()
    workbook.xlsx.writeFile(this.path).then(() => 1)
  }
}

module.exports.DealExcel = DealExcel
