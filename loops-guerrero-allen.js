// Logging values with for loops
// Write a for loop that logs each number from 1 - 20.
// for (let i=1; i<=20; i++){
// console.log(i)
// }
// Write a for loop that logs the result of each number from 1 - 20 tripled.
// for (let i=1; i<=20; i++){
//     console.log(i * 3)
//     }
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD" Expected output --> ODD, 2, ODD, 4, ODD, 6 ...etc
// for (let i=1; i<=20; i++){
//     if (i%2 === 0){
//         console.log(i)
//     }
//     else if (i%2 === 1){
//         console.log("ODD")
//     }
//     }

// Challenge #2
var nums = [3, 57, -9, 20, 67]
// Create a loop that will log the highest number from the array. Expected output --> 67

// Initialize a variable to STORE the highest number
// var highestNum = nums[0];

// for (let i = 1; i < nums.length; i++) {
//     // Check if the next element in the array is greater than the current highest number
//     if (nums[i] > highestNum) {
//         // The highest number is now index 'i' of array 'nums'
//         highestNum = nums[i];
//     }
// }
// // Log the highest number after going through the array
// console.log(highestNum)


// Create a loop that will log the lowest number from the array Expected output --> -9

// var lowestNum = nums[0];

// for (let i = 1; i < nums.length; i++) {
//     // Check if the next element in the array is greater than the current highest number
//     if (nums[i] < lowestNum) {
//         // The highest number is now index 'i' of array 'nums'
//         lowestNum = nums[i];
//     }
// }
// Log the highest number after going through the array
// console.log(lowestNum)

// Create a loop that will log the remainder of each number when divided by 2. Expected output --> 1, 1, -1, 0, 1

for (let i = 0; i < nums.length; i++) {
    console.log( nums[i] % 2 );
}