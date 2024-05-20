//завдання 1
function unique(arr) {
  return Array.from(new Set(arr));
}


let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
alert(unique(values));

//завдання 2
function aclean(arr) {
  let anagrams = new Map();

  for (let word of arr) {

    let sortedWord = word.toLowerCase().split('').sort().join('');

    anagrams.set(sortedWord, word);
  }

  return Array.from(anagrams.values());
}

let words = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
let uniqueWords = aclean(words);

alert(uniqueWords);

//завдання 3
function countOccurrences(arr) {
  let occurrences = new Map();

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (occurrences.has(item)) {
      // Якщо елемент вже є
      occurrences.set(item, occurrences.get(item) + 1);
    } else {
      // Якщо елемент ще не існує
      occurrences.set(item, 1);
    }
  }

  return occurrences;
}

let num = [1, 2, 3, 4, 2, 1, 3, 5, 6, 5, 12];
let result = countOccurrences(num);

for (let [item, count] of result) {
  console.log(`${item}: ${count} разів`);
}

//завдання 4
function allUnique(arr) {
  // Створюємо новий Set з елементами масиву
  const uniqueElements = new Set(arr);
  // Порівнюємо розмір Set з довжиною масиву
  return uniqueElements.size === arr.length;
}

// Приклад використання:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 2, 3, 4];

console.log(allUnique(arr1)); // Виведе: true
console.log(allUnique(arr2)); // Виведе: false