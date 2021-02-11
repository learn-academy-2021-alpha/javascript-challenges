// Consider this variable:

// var groceryList = ["chips", "dip", "cookies"]

// Write the code that will add "soda" to the end of the original array.

// groceryList.push("soda");
// console.log(groceryList);

// Write the code that will add "granola" to the end of array without altering the original array.

// groceryList.push("granola");
// console.log(groceryList);

// Consider this variable:
//   var numbers = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the array.


// numbers.unshift(0)
// console.log(numbers)

// Write the code that will add the number 12 to the end of the array.


// numbers.push(12)
// console.log(numbers)
// Write the code that will remove the first number from the array.

// numbers.shift()
// console.log(numbers)

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll() have to get creative! ;)

// numbers.splice(0, 0, 0)
// console.log(numbers)

// Consider this variable:
 //var numSet = [2, 13, 6, 8, 4, 2]

 // Write the code that finds the index of the first appearance of the number 2.

//console.log(numSet.indexOf(2))

// Write the code that finds the index of the last appearance of the number 2.

//console.log(numSet.lastIndexOf(2))

// Consider this variable:
var chars = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the chars array together into a string.

//console.log(chars.join());

// Write the code that reverses the order of the letters in the chars array and saves it into a variable called charsReversed.


var charsReversed = (chars.reverse());
console.log(charsReversed)

// Write the code that brings all the letters in the charsReversed array together into a string with a hyphen between each letter.
let joinedCharHyphen = charsReversed.join("-");
console.log(joinedCharHyphen);

// Write the code that brings all the letters in the charsReversed Array together into a string without separators.

let joinedChar = charsReversed.join("");
console.log(joinedChar);

// Create two arrays consisting of three first names of your cohort members in each.
// Sort the names in alphabetical order.

// Sort the names in reverse alphabetical order.

// Sort all the names in alphabetical order. Hint: Combine the arrays into a single array.