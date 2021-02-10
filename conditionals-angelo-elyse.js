// Challenges
// Make sure you try different options and change the variables to ensure properly working code.
//
// Write an if/else statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var myItem = 120

if(myItem <= 100){
  console.log("In budget.")
}else{
  console.log("Need more money!")
}
//
// Write an if/else statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
//
var hungry = true

if(hungry === true){
  console.log("eat food")
} else{
  console.log("keep coding")
}
// Write an if/else statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = "red"

if(trafficLight === "green"){
  console.log("go")
} else if(trafficLight === "yellow"){
  console.log("slow down");
} else{
  console.log("STOP!");
}
//
// Write an if/else statement that takes two variables of numbers and outputs the larger number, or logs equal if the numbers are the same.
//
var numOne = 5
var numTwo = 5

if (numOne > numTwo ) {
  console.log(numOne);
} else if (numOne < numTwo) {
  console.log(numTwo);
} else {
  console.log(`${numOne} is equal to ${numTwo}`);
}
// Write an if/else statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var numThree = 8
if (numThree === 0) {
  console.log("zero");
 }
else if (numThree % 2 == 0){
console.log("even");
} else if (numThree % 2 == 1) {
  console.log("odd");
}  else {
   console.log("error");
 }


//
// STRETCH Challenges
//
// Write an if/else statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
var myGrade = 87

if(myGrade === 100){
  console.log("PERFECT SCORE!");
}else if(myGrade < 100 && myGrade > 89){
  console.log("A");
}else if(myGrade < 90 && myGrade > 79){
  console.log("B");
}else if(myGrade < 80 && myGrade > 69){
  console.log("C");
}else if(myGrade < 70 && myGrade > 59){
  console.log("D");
}else if(myGrade === 0){
  console.log("no grade available");
}else if(myGrade <= 59){
  console.log("F");
}else{
  console.log("error");
}
//
// Write an if/else statement that takes a variable of a boolean, number, or string datatype and logs the data type of the variable HINT: use the JS operator typeof.
//
// Create a password checker using a single if/else statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
