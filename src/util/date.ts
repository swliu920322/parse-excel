import dayjs from 'dayjs'

export const getDate = (date = new Date(), needTime = true) => {
  let format = `YYYY-MM-DD${needTime ? ' HH:mm:ss' : ''}`
  return dayjs(date).format(format)
}