import { firstDateIsEarly, getDate } from '@/util/date'
import { reactive, ref, computed, nextTick } from 'vue'
import * as echarts from 'echarts'
import { useDataStore } from '@/stores/data.store'
import { ElMessage, ElMessageBox } from 'element-plus'

function getChangeContext(
  checkKeys:any[] = [],
  newObj: Record<string, any>,
  oldObj: Record<string, any>
) {
  const changeHistory: any[] = []
  const changedVal: Record<string, any> = checkKeys.reduce((r, item) => {
    const { key, type } = item
    const oldVal = oldObj[key]
    let newVal = newObj[key]
    if (type === 'date') {
      newVal ? (newVal = getDate(newVal, false)) : ''
    }
    if (oldVal !== newVal) {
      changeHistory.push(`${key}: ${oldVal || '空值'} => ${newVal || '空值'}`)
      return { ...r, [key]: newVal }
    }
    return r
  }, {})
  return {
    changeHistory,
    changedVal
  }
}

// 找到变化的key和value

export const useSearch = (props: any) => {
  const dataStore = useDataStore()
  // 根据生效的条件进行过滤
  let innerSearchRef = ref<any>({})
  const searchModel = reactive<Record<string, any>>({ toConfirm: false })

  const dataRef = computed(() => {
    const changedKeys = Object.keys(innerSearchRef.value)
    return dataStore.data[props.activeTab].filter((i: Record<string, any>) => {
        return changedKeys.reduce((r, key) => {
          const val = innerSearchRef.value?.[key]
          return r && i?.[key]?.indexOf(val) >= 0
        }, true)
      }
    )
  })
  const formRef = ref()


  function reset() {
    formRef.value.resetFields()
    innerSearchRef.value = {}
    // searchModel.
  }

  function toSearch() {
    innerSearchRef.value = { ...searchModel }
  }

  return {
    dataRef,
    formRef,
    searchModel,
    reset,
    toSearch
  }
}

export const useRootForm = () => {
  const visibleRef = ref<boolean>(false)
  const tableRef = ref<any>()
  // 临时存储，旧数据
  let scopeRef: Record<string, any> = {}
  const itemInfoRef = ref<any>({})

  function openEdit(row: any) {
    visibleRef.value = true
    scopeRef = row
    itemInfoRef.value = { ...row }
  }

  function cancel() {
    visibleRef.value = false
  }

  const dataStore = useDataStore()

  function confirmUpdate() {
    ElMessageBox.alert('是否确认该条的变更', '确认变更', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      center: true
    }).then(() => {
      let changeContext: any = {
        object: {
          history: scopeRef.history + `\n${getDate()} 确认了 记录变更` ,
          toConfirm: '否'
        }
      }
      if (scopeRef.selfOrder) {
        changeContext = {
          ...changeContext,
          sheetName: 'integrated',
          rowNumber: scopeRef.selfOrder
        }
      } else {
        changeContext = {
          ...changeContext,
          sheetName: 'rootApp',
          rowNumber: itemInfoRef.value.index
        }
      }
      dataStore.changeData(changeContext)
      closeRecord()
      ElMessage({
        type: 'success',
        message: '确认变更成功'
      })
    })
      .catch(() => {
      })
  }

  function confirm() {
    const checkKeys = [
      { key: 'Target Due Date', type: 'date' },
      { key: 'Status', type: 'string' },
      { key: 'Risk Description', type: 'string' }
    ]
    const { changedVal, changeHistory } = getChangeContext(checkKeys, itemInfoRef.value, scopeRef)
    if (Object.keys(changedVal).length) {
      changedVal.toConfirm = '是'
      Object.assign(scopeRef, changedVal)
      if (!scopeRef.history) {
        scopeRef.history = ''
      }
      const prefix = scopeRef.history ? '\n' : ''
      scopeRef.history += `${prefix}${getDate()} 修改了 ${changeHistory.join('、')}`

      let changeContext: any = {
        object: {
          ...changedVal,
          history: scopeRef.history,
          toConfirm: scopeRef.toConfirm
        }
      }
      if (scopeRef.selfOrder) {
        changeContext = {
          ...changeContext,
          sheetName: 'integrated',
          rowNumber: scopeRef.selfOrder
        }
      } else {
        changeContext = {
          ...changeContext,
          sheetName: 'rootApp',
          rowNumber: itemInfoRef.value.index
        }
      }
      dataStore.changeData(changeContext)
    }
    visibleRef.value = false
  }

  const recordVisibleRef = ref(false)
  const recordDataRef = ref([])

  function closeRecord() {
    recordVisibleRef.value = false
  }
  function openRecord(row: any) {
    scopeRef = row
    itemInfoRef.value = { ...row }
    recordDataRef.value = row.history?.split('\n').map((i: any) => ({ record: i })).reverse()
    recordVisibleRef.value = true
  }

  return {
    confirmUpdate,
    confirm,
    cancel,
    openEdit,
    visibleRef,
    itemInfoRef,
    tableRef,
    recordVisibleRef,
    recordDataRef,
    openRecord
  }
}

const getChartOption = (data: { name: string; value: string }[]) => ({
  title: {
    text: '应用风险比例',
    subtext: '风险数据',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: '应用',
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['20%', '70%'],
      data: data,
      label: {
        show: true,
        position: 'inside',
        formatter: '{d}%'
      },
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
})
const getOptions2 = (data: any[]) => {
  return {
    title: {
      text: '风险与信息完整度统计',
      subtext: '风险数据',
      center: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    xAxis: {
      type: 'category',
      data: data.map((i: any) => i.name)
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        label: {
          show: true,
          position: 'inside'
        },
        data: data.map((i:any) => i.value),
        type: 'bar',
        itemStyle: data.map((i: any) => i.itemStyle)
      }
    ]
  }
}
export const useOpenChart = (props: any) => {
  const chartState = ref(false)
  const chartRef = ref()
  const chartRef2 = ref()
  const dataStore = useDataStore()

  async function openChart() {
    chartState.value = true
    await nextTick()
    const echartRef = echarts.init(chartRef.value)
    const echartRef2 = echarts.init(chartRef2.value)
    const resizeObserver = new ResizeObserver(() => {
      echartRef.resize()
      echartRef2.resize()
    })
    resizeObserver.observe(document.body)
    const data = dataStore.data[props.activeTab].map(i => {
      let judge: any[] = i.children ? [i, i.children] : [i.par, i]
      return {
        ...i,
        out: firstDateIsEarly(judge[0], judge[1], 'Target Due Date')
      }
    })
    const data1 = data.reduce((r, c) => {
      r[c.out ? 0 : 1].value++
      return r
    }, [
      { name: '风险', value: 0, itemStyle: { color: 'red' } },
      { name: '无风险', value: 0, itemStyle: { color: '#91CC75' } }
    ])


    const data2 = data.reduce((r, c) => {
      if (c['Target Due Date'] && c.children.every((i:any) => i['Target Due Date'])) {
        r[c.out ? 0 : 1].value++
      } else {
        r[2].value++
      }
      return r
    }, [
      { name: '有日期有风险', value: 0, itemStyle: { color: 'red' } },
      { name: '有日期无风险', value: 0, itemStyle: { color: '#91CC75' } },
      { name: '未设置日期', value: 0 }
    ])
    echartRef.setOption(getChartOption(data2))
    echartRef2.setOption(getOptions2(data2))
  }

  function closeChart() {
    chartState.value = false
  }

  return {
    chartState,
    openChart,
    closeChart,
    chartRef,
    chartRef2
  }
}
