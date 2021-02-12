// Challenges
// Make sure you try different options and change the variables to ensure properly working code.
//
// Write an if/else statement that takes a variable of item and logs "in budget" if a price is $100 or less.
// var item = 1000
// if(item<=100){
//   console.log("in budget")
// } else{
//   console.log("you're broke")
// }
//
// Write an if/else statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
// var hungry = false
// if(hungry===true){
//   console.log("eat food");
// } else{
//   console.log("keep coding");
// }
//
// Write an if/else statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
// var trafficLight = "dark"
// if(trafficLight === "green"){
//     console.log("go")
// }
// else if(trafficLight === "yellow"){
//     console.log("slow down")
// }
// else if(trafficLight === "red"){
//     console.log("stop")
// }
// else {
//     console.log("open your eyes")
// }
//
// Write an if/else statement that takes two variables of numbers and outputs the larger number, or logs equal if the numbers are the same.
// var num1 = 42
// var num2 = "poop"

// if(num1 > num2){
//     console.log(`${num1} is the larger number`)
// }else if(num1 < num2){
//     console.log(`${num2} is the larger number`)
// }
// else if (num1 === num2){
//     console.log(`${num1} is equal to ${num2}`)
// }
// else{
//     console.log("something went wrong")
// }
//
// Write an if/else statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var num3 = 0
if(num3 === 0){
  console.log(`${num3} is zero`);
} else if(num3%2 === 1){
  console.log(`${num3} is odd`);
} else if(num3%2 === 0){
  console.log(`${num3} is even`);
} else {
  console.log("something went wrong");
}
//
// STRETCH Challenges
//
// Write an if/else statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

var grade = 0

if(grade === 100){
  console.log("perfect score");
} else if(grade >= 93 && grade < 100){
  console.log("A")
}else if(grade >= 90 && grade < 93){
  console.log("A-")
}else if(grade >= 87 && grade < 90){
  console.log("B+")
}else if(grade >= 83 && grade < 87){
  console.log("B")
}else if(grade >= 80 && grade < 83){
  console.log("B-")
}else if(grade >= 76 && grade < 80){
  console.log("C+")
}else if(grade >= 73 && grade < 76){
  console.log("C")
}else if(grade >= 70 && grade < 73){
  console.log("C-")
}else if(grade >= 60 && grade < 70){
  console.log("D")
}else if(grade > 0 && grade < 67){
  console.log("F")
}else if(grade === 0){
  console.log("no grade available")
}
//
// Write an if/else statement that takes a variable of a boolean, number, or string datatype and logs the data type of the variable HINT: use the JS operator typeof.

var randomData = true
if(typeof randomData === `string`){
  console.log("string");
}if(typeof randomData === `boolean`){
  console.log("boolean");
}if(typeof randomData === `number`){
  console.log("number");
}

// Create a password checker using a single if/else statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

var password = "!!!!!!!!!!!!"
if(password.length >= 12 && password.includes("!")){
  console.log("That is a mighty strong password!");
} else if(password.length >= 8 || password.includes("!")){
  console.log("That password is strong enough.");
} else{
  console.log("That is not a valid password.");
}
