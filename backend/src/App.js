const express = require('express')
const { DealExcel } = require('../util/index')
const path = require('path')
const app = express()
const port = 3000

app.get('/getData', (req, res) => {
  const fileName = req.query.excel || 'data';
  console.log(fileName)
  const dealExcel = new DealExcel({ path: path.resolve(__dirname, `./${fileName}.xlsx`) })
  dealExcel.readFile()
  res.json({
    data: dealExcel.data
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})