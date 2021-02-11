// 1. Consider this variable:
//   var groceryList = ["chips", "dip", "cookies"]
// var groceryList = ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.
// groceryList.push("soda")
// console.log(groceryList)
// Write the code that will add "granola" to the end of array without altering the original array.
// var granola = "granola"
// var fullList = groceryList.concat(granola)
// console.log(fullList)

// var numbers = [2, 4, 6, 8, 10]

// Write the code that will add the number 0 to the beginning of the array.
// numbers.unshift(0)
// console.log(numbers)
// Write the code that will add the number 12 to the end of the array.
// numbers.push(12)
// console.log(numbers)
// Write the code that will remove the first number from the array.
// numbers.shift()
// console.log(numbers)
// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;
// var numbers2 = [0]
// var allNumbers = numbers2.concat(numbers)
// console.log(allNumbers)

// Challenge #3
// var numSet = [2, 13, 6, 8, 4, 2]

// Write the code that finds the index of the first appearance of the number 2.
// console.log( numSet.indexOf(2) )

// Write the code that finds the index of the last appearance of the number 2.
// console.log( numSet.lastIndexOf(2) )

// var chars = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the chars array together into a string.
// console.log(chars.join(""));

// Write the code that reverses the order of the letters in the chars array and saves it into a variable called charsReversed.
// var charsReversed = chars.reverse()
// console.log(charsReversed)
// Write the code that brings all the letters in the charsReversed array together into a string with a hyphen between each letter.
// console.log(charsReversed.join("-"))
// Write the code that brings all the letters in the charsReversed Array together into a string without separators.
// console.log(charsReversed.join(""))

// 5. Create two arrays consisting of three first names of your cohort members in each.
var array1 = ["Allen", "Junior", "Angelo"]
var array2 = ["Justin", "Raul", "Fernando"]
// Sort the names in alphabetical order.
// console.log(array1) // before sort
// console.log(array1.sort()) // after sort
// console.log(array2) // before sort
// console.log(array2.sort()) // after sort

// Sort the names in reverse alphabetical order.
// console.log( array1 ) // before
// console.log( array1.sort().reverse() ) // after
// console.log( array2 ) // before
// console.log( array2.sort().reverse() ) // after
// Sort all the names in alphabetical order. Hint: Combine the arrays into a single array.
var allNames = array1.concat(array2)
console.log( allNames ) // before
console.log( allNames.sort() ) // after