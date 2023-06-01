import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import ptBR from 'dayjs/locale/pt-br'

dayjs.extend(relativeTime)
dayjs.locale(ptBR)

export function getDateDifferenceRelativeToNow(date: Date | string) {
  return dayjs(date).fromNow()
}
