import * as XLSX from 'xlsx'


interface IInfo {
  sheetName: string,
  data: Record<string, any>[]
}

export class DataDeal {

  // 将数据导出来
  exportExcel(infos: IInfo[] = [], fileName = '') {
    const wb = XLSX.utils.book_new()
    infos.forEach(i => {
      const ws = XLSX.utils.json_to_sheet(i.data)
      XLSX.utils.book_append_sheet(wb, ws, i.sheetName)
    })
    XLSX.writeFileXLSX(wb, fileName)
    return this
  }
}

import { integrated, allRoutes, rootApp, independentApp } from '@/util'

export const exportExcel = () => {
  const dataSheet2 = rootApp.map(i => {
    const { name, state, po, category, viewer } = i
    return {
      ['Independent App']: name, PRU: '', Category: category,
      ['APP-Owner']: po?.displayName,
      ['IT-Viewer']: viewer?.displayName,
      Status: state,
      ['Target Due Date']: '',
      ['Risk Description']: ''
    }
  })
  const dataSheet1 = independentApp.map(i => {
    const { name, state, po, category, viewer } = i
    return {
      ['Independent App']: name, PRU: '', Category: category,
      ['APP-Owner']: po?.displayName,
      ['IT-Viewer']: viewer?.displayName,
      Status: state,
      ['Target Due Date']: '',
      ['Risk Description']: ''
    }
  })
  const dataSheet3 = integrated.map(i => {
    const { par, name, state, po, category, viewer } = i
    return {
      ['Root-App']: par.name,
      ['Sub-App']: name,
      ['Sub-Owner']: po?.displayName,
      ['Dependency Desc']: category,
      ['Sub Due Date']: '',
      ['Target Due Date']: '',
      ['Time Risk']: ''
    }
  })
  const info: IInfo[] = [
    { sheetName: 'rootApp', data: dataSheet1 },
    { sheetName: 'independentApp', data: dataSheet2 },
    { sheetName: 'integrated', data: dataSheet3 }
  ]
  exportExcelTotal(info, 'test.xlsx')
}

function exportExcelTotal(infos: IInfo[] = [], fileName = '') {
  const wb = XLSX.utils.book_new()
  infos.forEach(i => {
    const ws = XLSX.utils.json_to_sheet(i.data)
    XLSX.utils.book_append_sheet(wb, ws, i.sheetName)
  })
  XLSX.writeFileXLSX(wb, fileName)
  return this
}

export const exportExcelSimple = (data, fileName = '', sheetName = 'Data') => {
  const ws = XLSX.utils.json_to_sheet(data)
  const ws1 = XLSX.utils.json_to_sheet([{ name: 1, age: 2 }])
  const ws2 = XLSX.utils.json_to_sheet([{ name: 3, age: 4 }])
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, sheetName)
  XLSX.utils.book_append_sheet(wb, ws1, 'aa')
  XLSX.utils.book_append_sheet(wb, ws2, 'bb')
  XLSX.writeFileXLSX(wb, fileName)
}