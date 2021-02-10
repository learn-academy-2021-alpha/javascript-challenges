// Write an if/else statement that takes a variable of item and logs "in budget" if a price is $100 or less.
// var price = Math.floor(Math.random()*600)

// if (price <= 100) {
//    console.log("You are in budget!")
// } else {
//    console.log("You are out of budget!")
//}

//Write an if/else statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = ["Yes","No"]
var mood = hungry[Math.floor(Math.random()*hungry.length)]

if (mood === "Yes"){
    console.log("eat food")
} else {
    console.log("keep coding")
}

//Write an if/else statement that takes a variable of trafficlight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var light = ["Green","Yellow","Red"]
var trafficLight = light[Math.floor(Math.random()*light.length)]

if (trafficLight === "Green"){
    console.log("Go") 
} else if (trafficLight === "Yellow") {
    console.log("Slow Down")
} else if (trafficLight === "Red") {
    console.log("stop")
}
//Write an if/else statement that takes two variables of numbers and outputs the larger number, or logs equal if the numbers are the same.
var num1 = 35
var num2 = 97

if (num1 > num2){
    console.log(`The larger number is ${num1}`)
} else {
    console.log(`The larger number is ${num2}`)
}

//Write an if/else statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var randNum = number[Math.floor(Math.random() * number.length)]

if (randNum === 0){
    console.log(`${randNum} is zero`)
} else if (randNum % 2 === 0){
    console.log(`${randNum} is an even number`)
} else {
    console.log(`${randNum} is an odd number`)
}