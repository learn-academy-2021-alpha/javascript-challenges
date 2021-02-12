// // Use .map() or .filter() to complete all of the following exercises:
// //
// // Write a function that takes in an array and returns a new array with all numbers multiplied by 10.
// var arr1 = [3, 9, 15, 4, 10]
// // Expected output:

// //create a function that takes in an array
// const timesTen = (array) => {
//   return array.map (value =>{
//     return value * 10
//   })
// }
// console.log(timesTen(arr1))
// //return new array with all numbers using .map
// //multiply new array by 10
// //
// // Expected outpute: [30, 90, 150, 40, 100]




// // Write a function that takes in an array and returns a new array with only odd numbers
// var arr2 = [2, 7, 3, 5, 8, 10, 13]
// // Expected output:
// // [7, 3, 5, 13]

// //create a function using an array
// //use filter to return odd numbers

// const onlyOdd = (array) => {
//   return array.filter (value =>{
//     return value % 2 !== 0
//   })
// }
// console.log(onlyOdd(arr2));




// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
// var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // Expected output:
// //
// // "nicework"

// // Create a function that takes an array as an argument
// const onlyLetters = (array) => {
//   // Create a variable that stores the new array
//   // We will need to filter the array looking for the strings
//   let newArray = array.filter(value => {
//     // Use typeof to see if it is a string
//     return typeof value === "string"
//   })

//   // Return the new array as a string using the 'join' built-in method
//   return newArray.join('')
// }

// console.log( onlyLetters(comboArr) )

// STRETCH Challenges
// Create a function that takes in a string and returns a new string with all the vowels removed.
 var str = "javascript is awesome"
// Expected output:
//
// "jvscrpt s wsm"

// create a function that takes in 1 argument that is a string
const noVowels = (string) => {
  // create a new variable to split the string into an array
  let arrayOfLetters = string.split('')
  // check if letter is NOT a vowel (a, e, i, o, u)
  // create a new array of consonants
  let arrayOfConsonants = arrayOfLetters.filter(value => {
    // if (value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u") {
    if (!["a","e","i","o","u"].includes(value)) {
      return true
    } else {
      return false
    }
  })

  // join the array into a string that we return
  return  arrayOfConsonants.join('')
}

console.log(noVowels(str))


// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]
//
// var arr2 = [7, 8, 2, 1, 5, 4]
// Expected output:
//
// [3, 7, 10, 5, 4, 8, 2, 1]
