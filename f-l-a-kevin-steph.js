// Write a function that takes in an array and returns a new array with all numbers multiplied by 3.
// var testArr1 = [3, 9, 15, 4, 10]
// const tripled = (array) => {
//     let tripledNums = []
//     for(i = 0; i < array.length; i++){
//         tripledNums.push(array[i] * 3)
//     }
//     return tripledNums
// }
// console.log(tripled(testArr1))

// Expected output --> [9, 27, 45, 12, 30]

// Write a function that takes in an array and returns a new array with only odd numbers.
// var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// const oddNums = (array) => {
//     let odds = []
//     for(i = 0; i < array.length; i++){
//         if(array[i] % 2 !== 0){
//             odds.push(array[i])
//         }
//     }
//     return odds
// }
// console.log(oddNums(testArr2))

// Expected output --> [-7, 3, 5, 13]

// Write a function that takes in a string and returns a new string with every letter capitalized. HINT: you do not need arrays or loops.
// var myMessage = "Hello There"
// const upperCase = (string) => {
//     return string.toUpperCase()
// }
// console.log(upperCase(myMessage))

// Expected output --> "HELLO THERE"

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method
// var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]

// const newString = (array) => {
//     let letters = []
//     for(i = 0; i < array.length; i++){
//         if(typeof array[i] === "string"){
//             letters.push(array[i])
//         }
//     }
//     return letters.join("")
// }
// console.log(newString(comboArr))

// Expected output --> "nicework"

// Create a function that returns the highest number
// var highestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]

// const highestNum = (array) => {
//     let highest = 0
//     for(i = 0; i < array.length; i++){
//         if(array[i] > highest){
//             highest = array[i]
//         }
//     }
//     return highest
// }
// console.log(highestNum(highestNumber))

// Expected output --> 67

// Create a function that returns the lowest number
// var lowestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]

// const lowestNum = (array) => {
//     let smallest = 0
//     for(i = 0; i < array.length; i++){
//         if(array[i] < smallest){
//             smallest = array[i]
//         }
//     }
//     return smallest
// }
// console.log(lowestNum(lowestNumber))

// Expected output --> -9

// Create a function that calculates the sum
// var addThese1 = [1, 2, 3, 4]

// const sum = (array) => {
//     let addedSum = 0
//     for(i = 0; i < array.length; i++){
//         addedSum = addedSum + array[i]
//     }
//     return addedSum
// }
// console.log(sum(addThese1))
// console.log(sum([3,6,7,8,9,3]))

// Expected output --> 10

// var addThese2 = []

// Expected output --> 0

// Create a function that calculates the mean value
// var meanChecker = [1, 2, 3] //Expected output --> 2

// const mean = (array) => {
//     let mean1 = 0
//     for(i = 0; i < array.length; i++){
//         mean1 = mean1 + array[i]
//     }
//     return mean1 / array.length
// }
// console.log(mean(meanChecker))

// Create a function that finds the index of the highest number
// var indexHighestNumber = [1, 4, 2]

// const indexOf = (array) => {
//     let highestNum = 0
//     let highestIndex = 0
//     for(i = 0; i < array.length; i++){
//         if(array[i] > highestNum){
//             highestNum = array[i]
//             highestIndex = i
//         }
//     }
//     return highestIndex
// }
// console.log(indexOf(indexHighestNumber))

// Expected output --> 1

// Create a function that takes in a string and returns only the middle value
var testString1 = "hello" // Expected output --> "l" var testString2 = "boogeyman" Expected output --> "e"

const middleLet = (string) => {
    let position = 0
    let length = 0
    if(string.length % 2 === 1){
        position = string.length / 2
        length = 1
    } else {
        position = string.length / 2 - 1
        length = 2
    }
    return string.substring(position, position + length)
}
console.log(middleLet("banana"))
