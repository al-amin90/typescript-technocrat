// function solution(str: string) {
//     const splitStr = str.split("");
//     if (splitStr.length % 2 === 0) {
//         console.log("even");
//     } else {
//         splitStr.push("_")
//     }

//     let pairArray = []
//     for(let i=0; i < splitStr.length; i += 2){
//         const pair = splitStr[i] + splitStr[i+1]
//         pairArray.push(pair);

//     }
//     return(pairArray);
// }

// console.log(solution("abcde"));

function makeUpperCase(str: string) {
  // Code here
  return str.toUpperCase();
}

function solution(str: string, ending: string): boolean {
  

  return str.endsWith(ending); // TODO: complete
}
console.log(solution("abcde", "abc"));
