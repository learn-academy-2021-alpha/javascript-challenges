// conditional challenges
// var item = 10

// if (item > 100){
//     console.log("over budget")
// } else if(item < 100){
//     console.log("in budget")
// }

// Write an if/else statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
// var hungry = false;

// if (hungry === true) {
//     console.log("eat food")
// } else if (hungry === false) {
//     console.log("keep coding")
// }

// Write an if/else statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
// var randomNum = Math.floor(Math.random() * Math.floor(3));

// var trafficLight

// if (randomNum === 0){
//     trafficLight = "green"
// } else if (randomNum === 1){
//     trafficLight = "yellow"
// } else if (randomNum === 2){
//     trafficLight = "red"
// }

// if (trafficLight === "green"){
//     console.log("go")
// } else if (trafficLight === "yellow"){
//     console.log("slow down")
// } else if (trafficLight === "red"){
//     console.log("stop!!")
// } 

// Write an if/else statement that takes two variables of numbers and outputs the larger number, or logs equal if the numbers are the same.
// var num1 = 100
// var num2 = 100

// if (num1 < num2) {
//     console.log(num2)
// } else if (num1 > num2) {
//     console.log(`${num1}`);
// } else if (num1 === num2) {
//     console.log('numbers are the same')
// }

// Write an if/else statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var number = 6

var remainder = number % 2

if (number === 0) {
    console.log('zero');
} else if (remainder === 1) {
    console.log('odd');
} else if (remainder === 0) {
    console.log('even');
}