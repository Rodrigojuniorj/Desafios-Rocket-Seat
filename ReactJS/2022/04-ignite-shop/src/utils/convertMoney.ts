export const MoneyToFloat = (value: string) => {
  return Number(value.replace('R$', '').replace(',', '.').trim())
}