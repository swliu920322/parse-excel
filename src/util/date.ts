import dayjs from 'dayjs'

export const getDate = (date = new Date(), needTime = true) => {
  let format = `YYYY-MM-DD${needTime ? ' HH:mm:ss' : ''}`
  return dayjs(date).format(format)
}

export const firstDateIsEarly = (firstDate: any, secondDate: any | any[], key?: string) => {
  if (Array.isArray(secondDate)) {
    if(key) {
      return secondDate.some(i => new Date(i[key]) > new Date(firstDate[key]))
    }
    return secondDate.some(i => new Date(i) > new Date(firstDate))
  }
  if(key) {
    return new Date(firstDate[key]) < new Date(secondDate[key])
  }
  return new Date(firstDate) < new Date(secondDate)
}