// DON'T FORGET TO PSEUDO CODE

// Write a function that takes in an array and returns a new array with all numbers multiplied by 3.
// var testArr1 = [3, 9, 15, 4, 10];

//create a function that takes an array
// const multiplier = (array) => {
// 	let storageArray = [];
// 	for (let i = 0; i < array.length; i++) {
// 		storageArray.push(array[i] * 3);
// 	}
// 	return storageArray;
// };
// console.log(multiplier(testArr1));
//returns an array with all numbers multiplied by 3

// Expected output --> [9, 27, 45, 12, 30]

// // Write a function that takes in an array and returns a new array with only odd numbers.
// // Input array is testArr2
// var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13];

// // Create a function that takes in 1 argument that is an array
// const oddNumbersOnly = (array) => {
// 	// Create an empty array to store the odd numbers
// 	let oddNumbers = [];
// 	// ASSUME we iterate over the array -> for loop
// 	for (let i = 0; i < array.length; i++) {
// 		// We need to check if the number is odd -> if conditional
// 		// If the number IS odd, we need to add it to the function's returning array
// 		if (array[i] % 2 !== 0) {
// 			oddNumbers.push(array[i]);
// 		}
// 	}
// 	// Once we complete the for loop, we need to return the array with the odd numbers
// 	return oddNumbers;
// };

// // Expected output --> [-7, 3, 5, 13]
// console.log(oddNumbersOnly(testArr2));

// Write a function that takes in a string and returns a new string with every letter capitalized. HINT: you do not need arrays or loops.
// var myMessage = "Hello There";
// //write a function that takes a string

// const wordCap = (string) => {
// 	return string.toUpperCase();
// };
// //returns a new string with every letter capitalized.
// console.log(wordCap(myMessage));
// Expected output --> "HELLO THERE"

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method
var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]

// Create a function that takes 1 argument that is an array
const findLetters = (array) => {
	// Create a variable to store the letters
	let letters = [];
	// We will iterate through the array with a for loop
	for (let i = 0; i < array.length; i++) {
		// We will need to check IF the element is a letter
		if (typeof array[i] === "string") {
			// If it is a letter, add it to the variable storing the letters
			letters.push(array[i]);
		}
	}
	// At this point, we will have an array 'letters' with all the letters
	
	// Return the letters as a string
	return letters.join("");
}

// Expected output --> "nicework"
console.log(findLetters(comboArr));

// Create a function that returns the highest number
// var highestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]

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

// EPIC Challenge
// High/Low Game
// Create an HTML page and link your JavaScript file
// More information about linking HTML to JavaScript here
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive)
// As a user, when I see if my guess is too high or too low
// As a user, if I guess the number correctly I am notified that I won
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message
