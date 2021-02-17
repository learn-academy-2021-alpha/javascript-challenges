// Challenges
// DON'T FORGET TO PSEUDO CODE!
//
// Use .map() or .filter() to complete all of the following exercises:
//
// Write a function that takes in an array and returns a new array with all numbers multiplied by 10.
//  var arr1 = [3, 9, 15, 4, 10]
//
// //create function that takes array as argument
// //inside of function use .map to create new array with values multiplied by 10
// //return new array
// //console.log(function)
//
// const arrMultTen = (array) => {
//   return array.map(value =>{
//     return value * 10
//   })
// }
// console.log(arrMultTen(arr1))

// Expected output: [30, 90, 150, 40, 100]
// Write a function that takes in an array and returns a new array with only odd numbers
//  var arr2 = [2, 7, 3, 5, 8, 10, 13]
//
// //write a function that takes an array as an arguments
// //return subset of array with only odd numbers using .filter
//
// const onlyOdds = (array) => {
//   return array.filter(value =>{
//     return value % 2 !== 0
//   })
// }
// console.log(onlyOdds(arr2))

// Expected output: [7, 3, 5, 13]
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
 var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

//write function that takes mixed array as argument
//returns string with only letters
//use .filter and typeof to sort out the letters
// use .join to merge new array into a string

const stringLetters = (array) => {
  return array.filter(value => {
    return typeof value === "string"
  }).join("")
}
console.log(stringLetters(comboArr));
// Expected output: "nicework"

// STRETCH Challenges
// Create a function that takes in a string and returns a new string with all the vowels removed.
//  var str = "javascript is awesome"
// Expected output:
//
// "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]
//
// var arr2 = [7, 8, 2, 1, 5, 4]
// Expected output:
//
// [3, 7, 10, 5, 4, 8, 2, 1]
