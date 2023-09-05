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
  const dataSheet1 = rootApp.map(i => {
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
  const dataSheet2 = independentApp.map(i => {
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
    const { par, state, name, po, category, viewer } = i
    return {
      ['Root-App']: par.name,
      ['Sub-App']: name,
      ['Sub-Owner']: po?.displayName,
      ['Dependency Desc']: category,
      ['Sub Due Date']: '',
      ['Target Due Date']: '',
      ['Time Risk']: '',
      ['APP-Owner']: po?.displayName,
      ['IT-Viewer']: viewer?.displayName,
      Status: state,
      ['Risk Description']: ''
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
