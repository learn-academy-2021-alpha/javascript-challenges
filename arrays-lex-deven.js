// Consider this variable:
// let groceryList = ["chips", "dip", "cookies"]
// // Write the code that will add "soda" to the end of the original array.
// groceryList.push("soda");
// console.log(groceryList);
// Write the code that will add "granola" to the end of array without altering the original array.
// var granola = ["granola"]
// let groceryList2 = groceryList.concat(granola);
// console.log(groceryList);
// console.log(groceryList2);
// Consider this variable:
var numbers = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the array.
numbers.unshift(0)
// console.log(numbers)
// Write the code that will add the number 12 to the end of the array.
numbers.push(12)
// console.log(numbers)
// Write the code that will remove the first number from the array.
numbers.shift()
console.log(numbers)
// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
var numbers3 = [0]
var numbers2 = numbers3.concat(numbers)
console.log(numbers2)
// Consider this variable:
   var numSet = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.
console.log(numSet.indexOf(2));
//
// Write the code that finds the index of the last appearance of the number 2.
console.log(numSet.lastIndexOf(2));
//
// Consider this variable:
  var chars = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the chars array together into a string.
let charsJoined = chars.join("");
console.log(charsJoined);
//
// Write the code that reverses the order of the letters in the chars array and saves it into a variable called charsReversed.
let charsReversed = chars.reverse();
console.log(charsReversed);
//
// Write the code that brings all the letters in the charsReversed array together into a string with a hyphen between each letter.
let charsReversedJoined = charsReversed.join("-");
console.log(charsReversedJoined);
//
// Write the code that brings all the letters in the charsReversed Array together into a string without separators.
let charsReversedJoined2 = charsReversed.join("");
console.log(charsReversedJoined2);
//
// Create two arrays consisting of three first names of your cohort members in each.
var firstNames1 = ["fernando", "guerrero", "sarah"];
var firstNames2 = ["stephanie","justinn","allen"];
// Sort the names in alphabetical order.

//
// Sort the names in reverse alphabetical order.
//
// Sort all the names in alphabetical order. Hint: Combine the arrays into a single array.
