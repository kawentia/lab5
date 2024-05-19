//задача1
let styles = ["Jazz", "Blues"];
console.log(styles);

styles.push("Rock-n-Roll");
console.log(styles);

let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Classics";
console.log(styles);

let firstElement = styles.shift();
console.log(firstElement);
console.log(styles);

styles.unshift("Rap", "Reggae");
console.log(styles);


//задача2
function sumInput() {
  let numbers = [];
  while (true) {
    let input = prompt("Введіть число", "");

    if (input === null || input.trim() === "" || isNaN(input)) {
      break;
    }
    numbers.push(Number(input));
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }

  return sum;
}

let result = sumInput();
alert("Сума чисел: " + result);

//задача3
function getMaxSubSum(arr) {
  let maxSum = 0;
  let currentSum = 0; // Поточна сума підмасиву

  for (let item of arr) {
    currentSum += item;
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
}

let arr = [1, -2, 3, 4, -9, 6];
console.log(getMaxSubSum(arr)); 