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