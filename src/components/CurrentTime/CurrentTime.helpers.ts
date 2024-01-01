import type { DateTimeFormatOptions } from 'intl'

const dateTimeOptions: DateTimeFormatOptions = {
  timeZone: 'America/Bogota',
  hour: 'numeric',
  minute: 'numeric',
  hour12: false,
}

export const getCurrentTime = () => {
  const date = new Date()
  const currentTime = date.toLocaleString('es-CO', dateTimeOptions)
  return currentTime
}
