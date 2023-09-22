export const fetchData = (fileName = 'test') => {
  return fetch(`http://localhost:3000/getData?excel=${fileName}`).then(response => {
    // 检查响应状态
    if (!response.ok) {
      throw new Error('网络请求失败')
    }
    // 将响应数据解析为JSON格式
    return response.json()
  })
    .catch(error => {
      // 处理错误
      console.error('发生错误:', error)
    })
}
export const changeObj = ({ rowNumber, object, sheetName }: any) => {
  const requestOptions = {
    method: 'POST',               // 设置请求方法为POST
    headers: {
      'Content-Type': 'application/json'  // 设置请求头为JSON类型
    },
    body: JSON.stringify({ rowNumber, object, sheetName }) // 将数据转换为JSON字符串并放入请求体中
  }
  return fetch(`http://localhost:3000/changeDetail`, requestOptions).then(response => {
    // 检查响应状态
    if (!response.ok) {
      throw new Error('网络请求失败')
    }
    // 将响应数据解析为JSON格式
    return response.json()
  })
    .catch(error => {
      // 处理错误
      console.error('发生错误:', error)
    })
}
export const changeData = (data: any, sheetName: string) => {

  const requestOptions = {
    method: 'POST',               // 设置请求方法为POST
    headers: {
      'Content-Type': 'application/json'  // 设置请求头为JSON类型
    },
    body: JSON.stringify({ data, sheetName }) // 将数据转换为JSON字符串并放入请求体中
  }
  return fetch(`http://localhost:3000/changeData`, requestOptions).then(response => {
    // 检查响应状态
    if (!response.ok) {
      throw new Error('网络请求失败')
    }
    // 将响应数据解析为JSON格式
    return response.json()
  })
    .catch(error => {
      // 处理错误
      console.error('发生错误:', error)
    })
}