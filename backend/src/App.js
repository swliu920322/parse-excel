const express = require('express')
const { DealExcel } = require('../util/index')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
var Excel = require('exceljs')
const XLSX = require('xlsx')
const app = express()
const port = 3000
// 解析 JSON 格式的请求体
app.use(bodyParser.json())
app.use(cors({
  origin: '*', // 允许访问的来源
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // 允许的HTTP方法
  credentials: true, // 允许跨域请求携带cookie
  optionsSuccessStatus: 204 // 设置预检请求成功的状态码
}))

function getExcelData() {
  const dealExcel = new DealExcel({ path: path.resolve(__dirname, `./test.xlsx`) })
  dealExcel.readFile()
  return dealExcel.data
}

function exportExcelTotal(infos = [], fileName = '') {
  const wb = XLSX.utils.book_new()
  infos.forEach(i => {
    const ws = XLSX.utils.json_to_sheet(i.data)
    XLSX.utils.book_append_sheet(wb, ws, i.sheetName)
  })
  XLSX.writeFileXLSX(wb, fileName, { compression: true })
}

app.get('/getData', (req, res) => {
  res.json({
    data: getExcelData()
  })
})

app.post('/changeData', (req, res) => {
  const { data, sheetName } = req.body
  const totalData = getExcelData()
  totalData[sheetName] = data
  const r = Object.keys(totalData).map(name => ({
    sheetName: name,
    data: totalData[name]
  }))
  exportExcelTotal(r, path.resolve(__dirname, 'test.xlsx'))
  res.json({
    data: 'ok'
  })
})
const route = path.resolve(__dirname, 'test.xlsx')
app.post('/changeDetail', async (req, res) => {
  const { rowNumber, object, sheetName } = req.body
  const dealExcel = new DealExcel({ path: route })
  dealExcel.updateValue({
    rowNumber,
    sheetName,
    object
  })
  res.json({
    data: 'ok'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})