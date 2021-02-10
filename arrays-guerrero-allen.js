// 1. Consider this variable:
//   var groceryList = ["chips", "dip", "cookies"]
var groceryList = ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.
groceryList.push("soda")
console.log(groceryList)
// Write the code that will add "granola" to the end of array without altering the original array.
var granola = "granola"
var fullList = groceryList.concat(granola)
console.log(fullList)

// 2.