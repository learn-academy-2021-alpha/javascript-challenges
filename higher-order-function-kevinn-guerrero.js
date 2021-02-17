// Use .map() or .filter() to complete all of the following exercises:

// Write a function that takes in an array and returns a new array with all numbers multiplied by 10.
// var arr1 = [3, 9, 15, 4, 10]
// var arr2 = [6, 4, 8, 8, 10]
// Expected output:

// [30, 90, 150, 40, 100]

// var numbersMultiplied = arr1.map(value => {
//   return value * 10
// })
// console.log(numbersMultiplied)

// const numbersMultiplied = (array) => {
//   var newArray = array.map(value => {
//     return value * 10
//   })
//   return newArray
// }
// console.log(numbersMultiplied(arr1))
// console.log(numbersMultiplied(arr2))

// Write a function that takes in an array and returns a new array with only odd numbers
// var arr2 = [2, 7, 3, 5, 8, 10, 13]
// // Expected output:
// const onlyOdds = (array) => {
//    return array.filter(value => {
//         return value % 2 !==0
//     })
// }
// console.log(onlyOdds(arr2))
// [7, 3, 5, 13]



// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
// var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// Expected output:

// "nicework"

// const onlyLetters = (array) => {
//   return array.filter(value => {
//     return typeof value === "string"
//   })
// }
// console.log(onlyLetters(comboArr))
// STRETCH Challenges
// Create a function that takes in a string and returns a new string with all the vowels removed.
 var str = "javascript is awesome" 
// Expected output:

const noVowels = (string) => {
  let stringArr = string.split("") 
  let newWord = stringArr.filter(value => {
    return value !== "a" && value !== "e" && value !== "i" && value !== "o"
    
  })
  return newWord.join("")
}

console.log(noVowels(str))
// "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]

// var arr2 = [7, 8, 2, 1, 5, 4]
// Expected output:

// [3, 7, 10, 5, 4, 8, 2, 1]