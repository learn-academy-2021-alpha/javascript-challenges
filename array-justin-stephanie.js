var groceryList = ["chips", "dip", "cookies"]

console.log(groceryList.push("soda"))
console.log(groceryList.push("granola"))
console.log(groceryList)

var numbers = [2, 4, 6, 8, 10]

console.log(numbers.unshift(0))
console.log(numbers)

console.log(numbers.push(12))
console.log(numbers)

console.log(numbers.shift())
console.log(numbers)

var zero = [0]
var newArray = zero.concat(numbers)
console.log(newArray)

var numSet = [2, 13, 6, 8, 4, 2]

console.log(numSet.indexOf(2))

console.log(numSet.lastIndexOf(2))

var chars = ["y", "a", "r", "r", "a"]

var charsReversed = chars.reverse()

//console.log(charsReversed)
//console.log(chars.join(""))
var a = charsReversed.join("")
console.log(a)

var a = ["elyse", "sarah", "fernando"]
var b = ["unior", "angelo", "deven"]

var c = a.concat(b)
//var c = a.sort()
//console.log(c.reverse())
console.log(c)
 console.log(c.sort())