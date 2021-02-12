// DON'T FORGET TO PSEUDO CODE

// Write a function that takes in an array and returns a new array with all numbers multiplied by 3.

//done
// var testArr1 = [3, 9, 15, 4, 10]

// const takesInArray = (argOfAnArray) => {
//     let holderForNewArray = []
//     for(let i=0; i<argOfAnArray.length; i++){
//         holderForNewArray.push(argOfAnArray[i]*3)
//     }
//     return holderForNewArray
// }  
// console.log(takesInArray(testArr1))

// Expected output --> [9, 27, 45, 12, 30]

// Write a function that takes in an array and returns a new array with only odd numbers.

// done 

// var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

// const takesInAnArray = (argOfAnArray) => {
//     let holderForNewArray = []
//     for(let i=0; i<argOfAnArray.length; i++){
//         if (argOfAnArray[i] % 2 !== 0){
//             holderForNewArray.push(argOfAnArray[i])
//         }
//     }
//     return holderForNewArray
// }

// console.log(takesInAnArray(testArr2))

// Expected output --> [-7, 3, 5, 13]

// Write a function that takes in a string and returns a new string with every letter capitalized. HINT: you do not need arrays or loops.

//done

// var myMessage = "Hello There"

// const upperCasesString = (string) => {
//        return string.toUpperCase() 
// }
// console.log(upperCasesString(myMessage))

// Expected output --> "HELLO THERE"

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method
// var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]

//we want a function that inputs array of numbers and letters
// and will output a string with only the letters

//still working on it

// const onlyLetters = (array) => {
//     let stringOnlyLetters= " "
//     for (let i=0; i<=array.length; i++){
//         if (typeOf(array[i]) === "letter"){
//             stringOnlyLetters.join(array[i])
//         }
//     }
//    return stringOnlyLetters
// }

// console.log(onlyLetters(comboArr))

// Expected output --> "nicework"

// Create a function that returns the highest number
var highestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]

const onlyNumber = (array) => {
    let largest = " "
    for (let i=0 ; i <=array.length ; i++ ){
        if (largest < array[i]){
        return largest = array[i]
        }   
    }
}

console.log(onlyNumber(highestNumber))

// Expected output --> 67

// Create a function that returns the lowest number
// var lowestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]

// Expected output --> -9

// Create a function that calculates the sum
// var addThese1 = [1, 2, 3, 4]

// Expected output --> 10

// var addThese2 = []

// Expected output --> 0

// Create a function that calculates the mean value
// var meanChecker = [1, 2, 3] Expected output --> 2

// Create a function that finds the index of the highest number
// var indexHighestNumber = [1, 4, 2]

// Expected output --> 1

// Create a function that takes in a string and returns only the middle value
// var testString1 = "hello" Expected output --> "l" var testString2 = "boogeyman" Expected output --> "e"

// STRETCH Challenges
// Palindrome: Create a function that takes in a string and determines whether the string is a palindrome (the same word forward and backwards)
// var isPalindrome1 = "racecar"

// Expected output --> "Yes racecar is a palindrome"

// var isPalindrome2 = "albatross"

// Expected output --> "No albatross is not a palindrome"

// Vowels Removed: Create a function that takes in a string and returns a new string with all the vowels removed
// var fullString1 = "javascript is awesome"

// Expected output --> "jvscrpt s wsm"

// var fullString2 = "I am a LEARN student"

// Expected output --> "m LRN stdnt"

// Merge Arrays: Create a function that takes in two arrays as arguments and returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3, 3]

// var arr2 = [7, 8, 2, 3, 1, 5, 4]

// Expected output --> [3, 7, 10, 5, 4, 8, 2, 1]

// Clean Function: Create a function that filters false, null, 0 and blank values from an array.
// var filterArrayValues = [58, " ", "abcd", true, null, false, 0]

// Expected output --> [58, "abcd", true]

// Pre-fill: Write a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// fillArray = (6, 0)

// expected output --> [0, 0, 0, 0, 0, 0]

// fillArray = (4, 11)

// expected output --> [11, 11, 11, 11]

// Create a function named addUp that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// addUp = (4)

// Expected output --> 10

// addUp = (13)

// Expected output --> 91

// addUp = (600)

// Expected output --> 180300
