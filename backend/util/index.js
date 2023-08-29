const XLSX = require('xlsx') ;
const ExcelJS = require('exceljs');
const updateExcel = ({ sheetName = '', rowIndex, columnIndex, value = '' }) => {
  return new Promise((resolve, reject) => {
    if (typeof rowIndex !== 'number' || !rowIndex || rowIndex < 0) {
      reject('请必须输入正确的行索引')
    }
    if (typeof columnIndex !== 'number' || columnIndex || columnIndex < 0) {
      reject('请必须输入正确的列索引')
    }
    if (!sheetName) {
      reject('请必须输入正确的表名称')
    }

  })

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
    const {Sheets,SheetNames } = this.workBook;
    const data = {};
    SheetNames.forEach(name=> {
      data[name] = XLSX.utils.sheet_to_json(Sheets[name])
    })
    this.data = data;
  }
}

module.exports.DealExcel = DealExcel;