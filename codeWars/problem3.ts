export function narcissistic(value: number): boolean {
  // your code here
  const valueArr = String(value).split('')

  const isNarcissistic: number = valueArr?.map(n =>  Math.pow(Number(n), valueArr.length)).reduce((a,total) => {return a + total}, 0)
  return value === isNarcissistic
}


// return masked string
export function maskify(cc: string): string {
const maskLength = Math.max(0, cc.length-4)

    return '#'.repeat(maskLength) + cc.substring(maskLength)
}

function sumUpNumbers(arr: string[]) {
 const usFormatte = arr?.map(n => {
  if(n.includes(',') && n.lastIndexOf(',') > n.lastIndexOf('.')){
     return Number(n.replace(',', '.').replace('.', ''))
    }else{
      return Number(n.replace(',', ''))
    }
  })
  const total = usFormatte?.reduce((a,c) => a +c,0)
   const parts = total.toFixed(2).split('.');
   parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
   return parts.join('.');
}

// function sumUpNumbers(arr: string[]) {
//   // your code here

// }

console.log('data', sumUpNumbers(["1,234.34", "1.324,2", "14"]));