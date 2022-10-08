export function limitDescription(description: string) {
  
  if(description.length > 100) {
    return description.substring(0, 160) + '...'
  }
  else if (description.length > 50) {
    return description.substring(0, 30) + '...'
  }
}
