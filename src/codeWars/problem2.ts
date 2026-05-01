export function reverseWords(str: string): string {
  // your code here
  const data = str.split(" ")?.map((s) => s.split('').reverse().join('')).join(' ');


  console.log("data", data);
  return "Go for it";
}

reverseWords("This is an example!");
