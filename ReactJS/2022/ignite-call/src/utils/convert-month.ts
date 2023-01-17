export function convertMonth(month: string) {
  if (month.length === 1) {
    return `0${month}`
  }

  return month
}
