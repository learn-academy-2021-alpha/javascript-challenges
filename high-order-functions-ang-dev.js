// Challenges
// DON'T FORGET TO PSEUDO CODE!

// Use .map() or .filter() to complete all of the following exercises:

// Write a function that takes in an array and returns a new array with all numbers multiplied by 10.
// var arr1 = [3, 9, 15, 4, 10]
// // Expected output:[ 30, 90 , 150, 40, 100]

// //Set up function that takes each number in the array and multiplys it by 10
// //The return of the function should give us an array with each number multiplied by 10

// const multiplysTen = arr1.map(value =>{
//     return value * 10
// })

// console.log(multiplysTen)


// [30, 90, 150, 40, 100]
// Write a function that takes in an array and returns a new array with only odd numbers
// var arr2 = [2, 7, 3, 5, 8, 10, 13]
// // Expected output:[7, 3 ,5 ,13]
//
// // Set up function that retuns odd number in new array
// // output should be only the odd numbers
//
// const oddNumbers = (array) =>{
//     return array.filter(value =>{
//         return value %2 !== 0
//     })
// }
//
// console.log(oddNumbers(arr2))

// [7, 3, 5, 13]
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// Expected output: "nicework"
const niceWork = (array) =>{
  return array.filter(value => {
    let letters = [].join("")
    return typeof value === "string"
    for (let i = 0; i < array.length; i++) {
      letters.push(array[i])
    }
  })

}
console.log(niceWork(comboArr));
//setup function that specifies letters and numbers only returning letters
// function reads array and identifies the letters and gives a string of "nicework"
// "nicework"

// STRETCH Challenges
// Create a function that takes in a string and returns a new string with all the vowels removed.
//  var str = "javascript is awesome"
// Expected output:

// "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]

// var arr2 = [7, 8, 2, 1, 5, 4]
// Expected output:

// [3, 7, 10, 5, 4, 8, 2, 1]
