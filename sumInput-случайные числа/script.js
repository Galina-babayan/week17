const button = document.querySelector("button");

button.addEventListener("click", getArray);
button.addEventListener("click", showArrFive);

arr = [];
let sorted = [];
function getArray() {
  for (let i = 0; i < 10; i++) {
    let min = -10;
    let max = 10;

    let numberRandom = Math.floor(Math.random() * (max - min + 1)) + min;

    arr.push(numberRandom);

    console.log(arr);

    //-- 1 ВАРИАНТ НАЙТИ MIN-MAX:------------

    sorted = [...arr];

    sorted.sort((a, b) => a - b);
    console.log(sorted);
    document.querySelector(".min").textContent = sorted[0];
    document.querySelector(".max").textContent = sorted[arr.length - 1];
    console.log(sorted[0]);
    console.log(sorted[arr.length - 1]);
    // --КОНЕЦ 1 ВАРИАНТА-----

    //--- 2 ВАРИАНТ НАЙТИ MIN-MAX:----------

    // let minNum = Math.min(...arr);
    // console.log(minNum);
    // let maxNum = Math.max(...arr);
    // console.log(maxNum);
    // document.querySelector(".min").textContent = minNum;
    // document.querySelector(".max").textContent = maxNum;

    // --КОНЕЦ 2 ВАРИАНТА---------

    // -- 3 ВАРИАНТ НАЙТИ MIN-MAX: -------------

    // let minNumber = arr[0];
    // let maxNumber = arr[0];

    // for (let i = 0; i < arr.length; i++) {
    //   let item = arr[i];

    //   if (item < minNumber) {
    //     minNumber = item;
    //   } else if (item > maxNumber) {
    //     maxNumber = item;
    //   }
    // }
    // document.querySelector(".min").textContent = minNumber;
    // document.querySelector(".max").textContent = maxNumber;
    // console.log(minNumber);
    // console.log(maxNumber);
    // --КОНЕЦ 3 ВАРИАНТА--------------------
  }
}

function showArrFive() {
  let print = "";
  document.querySelector(".array").textContent = "";
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    if (i === arr.length - 1) {
      print += item + ".";
    } else {
      print += item + ", ";
    }
  }
  document.querySelector(".array").textContent = print;

  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  document.querySelector(".sum").textContent = sum;

  let arithmeticMean = sum / arr.length;
  document.querySelector(".arithmetic-mean").textContent = arithmeticMean;
  console.log(arithmeticMean);

  let multiply = 1;
  for (let item of arr) {
    multiply *= item;
  }

  console.log(multiply);
  document.querySelector(".multiply").textContent = multiply;

  arr = [];
}
