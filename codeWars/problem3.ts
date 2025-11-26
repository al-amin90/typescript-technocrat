export function narcissistic(value: number): boolean {
  // your code here
  const valueArr = String(value).split('')

  const isNarcissistic: number = valueArr?.map(n =>  Math.pow(Number(n), valueArr.length)).reduce((a,total) => {return a + total}, 0)
  return value === isNarcissistic
}

console.log('data', narcissistic(16));
