// Задача 1
function getArrayParams(...arr) {
  
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    number = arr[i]

    if (number > max) {
      max = number;
    }

    if (number < min) {
      min = number;
    }

    sum += number;
  };

  let avg = Number((sum / arr.length).toFixed(2));
  
  return { min: min, max: max, avg: avg };
}


// console.log(getArrayParams(-99, 99, 10));  



// Задача 2

function summElementsWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    number = arr[i]
    sum += number;
}

  return arr.length > 0 ? sum : 0;
}

// console.log(summElementsWorker(10, 10, 11, 20, 10));  



function differenceMaxMinWorker(...arr) {

  return arr.length > 0 ? Math.max(...arr) - Math.min(...arr) : 0;
}

console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); 

function differenceEvenOddWorker(...arr) {
let sumEvenElement = 0;
let sumOddElement = 0;

for (let i = 0; i < arr.length; i += 1) {
number = arr[i];
  if (number % 2 === 0) {
    sumEvenElement += number;
  }
  else {
    sumOddElement += number;
}
}
let differenceEvenOddWorker = sumEvenElement - sumOddElement 
return arr.length > 0 ? differenceEvenOddWorker : 0;

}

// console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));  


function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

for (let i = 0; i < arr.length; i += 1) {
    number = arr[i]
    if(number % 2 === 0) {
      sumEvenElement += number;
      countEvenElement += 1;
    }
}

let averageEvenElementsWorker = sumEvenElement / countEvenElement;
return arr.length > 0 ? averageEvenElementsWorker : 0;
}

// console.log(getArrayParams(1, 2, 3, 4, 5, 6, 7, 8, 9));  


// Задача 3

function makeWork (arrOfArr, func) {

  let maxWorkerResult = arrOfArr[0][0];

for (let i = 0; i < arrOfArr.length; i += 1) {
  const result = func(...arrOfArr[i]);
  if (result > maxWorkerResult) {
    maxWorkerResult = result;
  }
}
return maxWorkerResult;
};

// const arr = [[10, 10, 11, 20, 10],
//              [67, 10, 2, 39, 88], 
//              [72, 75, 51, 87, 43],
//              [30, 41, 55, 96, 62]];

// console.log(makeWork(arr, summElementsWorker));
