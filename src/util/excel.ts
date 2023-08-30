import * as XLSX from 'xlsx'


interface IInfo {
  sheetName: string,
  data: Record<string, any>[]
}

export class DataDeal {

  // 将数据导出来
  appendData(infos: IInfo[] = [], fileName = '') {
    const wb = XLSX.utils.book_new()
    infos.forEach(i => {
      const ws = XLSX.utils.json_to_sheet(i.data)
      XLSX.utils.book_append_sheet(wb, ws, i.sheetName)
    })
    XLSX.writeFileXLSX(wb, fileName)
    return this
  }
}

export const exportExcel = (data, fileName = '', sheetName = 'Data') => {
  const ws = XLSX.utils.json_to_sheet(data)
  const ws1 = XLSX.utils.json_to_sheet([{ name: 1, age: 2 }])
  const ws2 = XLSX.utils.json_to_sheet([{ name: 3, age: 4 }])
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, sheetName)
  XLSX.utils.book_append_sheet(wb, ws1, 'aa')
  XLSX.utils.book_append_sheet(wb, ws2, 'bb')
  XLSX.writeFileXLSX(wb, fileName)
}