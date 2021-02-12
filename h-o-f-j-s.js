// Write a function that takes in an array and returns a new array with all numbers multiplied by 10.
// var arr1 = [3, 9, 15, 4, 10]
// // Expected output:
// const multiplied = (array) => {
//     return array.map(value => {
//         return value * 10
//     })
// }
// console.log(multiplied(arr1))

// // [30, 90, 150, 40, 100]

// // Write a function that takes in an array and returns a new array with only odd numbers
// var arr2 = [2, 7, 3, 5, 8, 10, 13]
// // Expected output:

// const onlyOdds = (array) => {
//     return array.filter(value => {
//         return value % 2 !== 0
//     })
// }
// console.log(onlyOdds(arr2))

// [7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// Expected output:

// "nicework"
var x = comboArr.join("")
const letters = (array) => {
    let str = array.filter(value => {
        return typeof value === "string"
    })
    return str.join("")
}
console.log(letters(comboArr))