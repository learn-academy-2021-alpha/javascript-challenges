// // Consider this variable:
// var groceryList = ["chips", "dip", "cookies"];
// // Write the code that will add "soda" to the end of the original array.
// // groceryList.push("soda");
// // console.log(groceryList);

// // Write the code that will add "granola" to the end of array without altering the original array.
// groceryList.push("granola");
// console.log(groceryList);

// Consider this variable:
// var numbers = [2, 4, 6, 8, 10];
// Write the code that will add the number 0 to the beginning of the array.
// numbers.unshift(0);
// console.log(numbers);

// Write the code that will add the number 12 to the end of the array.
// numbers.push(12);
// console.log(numbers);

// Write the code that will remove the first number from the array.
// numbers.shift();
// console.log(numbers);

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
// numbers.reverse();
// console.log(numbers);
// numbers.push(0);
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

// Consider this variable:
// var numSet = [2, 13, 6, 8, 4, 2];

// Write the code that finds the index of the first appearance of the number 2.

// console.log(numSet.indexOf(2));

// Write the code that finds the index of the last appearance of the number 2.
// console.log(numSet.lastIndexOf(2));

// Consider this variable:
// var chars = ["y", "a", "r", "r", "a"];
// Write the code that brings all the letters in the chars array together into a string.

// var joined = chars.join("");
// console.log(joined);
// Write the code that reverses the order of the letters in the chars array and saves it into a variable called charsReversed.

// var charsReversed = chars.reverse();
// console.log(charsReversed);

// Write the code that brings all the letters in the charsReversed array together into a string with a hyphen between each letter.

// console.log(charsReversed.join("-"));

// Write the code that brings all the letters in the charsReversed Array together into a string without separators.

// console.log(charsReversed.join(""));

// Create two arrays consisting of three first names of your cohort members in each.
// Sort the names in alphabetical order.

var group1 = ["Kevin", "Raul", "Sarah"];
var group2 = ["Steph", "Devin", "Jr"];

// group1.sort();
// console.log(group1);

// group2.sort();
// console.log(group2);

// Sort the names in reverse alphabetical order.

// group1.sort();
// group1.reverse();
// console.log(group1);

// group2.sort();
// group2.reverse();
// console.log(group2);

// Sort all the names in alphabetical order. Hint: Combine the arrays into a single array.

var bothGroups2 = group1.concat(group2).sort();

var bothGroups = group1.concat(group2);
bothGroups.sort();
console.log(bothGroups2);
