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
// console.log(solution("abcde", "abc"));

function humanYearsCatYearsDogYears(
  humanYears: number
): [number, number, number] {
  const years = [];
  let catYears = 0;
  let dogYears = 0;

  for (let i = 1; i <= humanYears; i++) {
    years.push(i);
  }

  years?.forEach((y) => {
    if (y === 1) {
      catYears += 15;
      dogYears += 15;
    } else if (y === 2) {
      catYears += 9;
      dogYears += 9;
    } else {
      catYears += 4;
      dogYears += 5;
    }
  });
  console.log("years", years);
  

  // Your code here!
  return [humanYears, catYears, dogYears];
}


function humanYearsCatYearsDogYears2(
  humanYears: number
): [number, number, number] {
  const years = [];
  let catYears = 0;
  let dogYears = 0;

  for (let i = 1; i <= humanYears; i++) {
    years.push(i);
  }

  years?.forEach((y) => {
    if (y === 1) {
      catYears += 15;
      dogYears += 15;
    } else if (y === 2) {
      catYears += 9;
      dogYears += 9;
    } else {
      catYears += 4;
      dogYears += 5;
    }
  });
  console.log("years", years);
  

  // Your code here!
  return [humanYears, catYears, dogYears];
}
console.log(humanYearsCatYearsDogYears(10));
