// 1. Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// setting up test that takes a function as an argument, and returns either answer
describe ("when function areYouTired is called", () => {
    it ("if response is yes, return drink coffee", () => {
        const argument = "yes";
        const actualResults = areYouRested(argument)
        expect(actualResults).toEqual("drink coffee")
    })
    it ("if response is no, return keep working", () => {
        const argument = "no";
        const actualResults = areYouRested(argument)
        expect(actualResults).toEqual("keep working")
    })
})
const areYouRested = (answer) => {
    if (answer === "yes") {
        return "drink coffee"
    } else if (answer === "no") {
        return "keep working"
    }
}
// Write the function that will make the test pass.
// 2. Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
describe ("when function areYouStressed is called", () => {
    it ("if response is yes, return relax", () => {
        const argument = "yes";
        const actualResults = areYouStressed(argument)
        expect(actualResults).toEqual("relax")
    })
    it ("if response is no, return keep going", () => {
        const argument = "no";
        const actualResults = areYouStressed(argument)
        expect(actualResults).toEqual("keep going")
    })
})

const areYouStressed = (answer) => {
    if (answer === "yes") {
        return "relax"
    } else if (answer === "no") {
        return "keep going"
    }
}

// Write the function that will make the test pass.
// 3. Write the test for a function that returns "in budget" if a price is lower than $300.

//setting up test that checks function. checking that function take a number as the argument and return is in budget

test ("when function price is called, return in budget", () =>{
    const argument = 200 
    const actualResults = price(argument)
    expect(actualResults).toEqual("you are in budget")
})

const price = (answer) =>{
    if(answer <= 300){
        return "you are in budget"
    }
}


// Write the function that will make the test pass.
// 4. Write the test for a function that takes in two arguments(numbers) and returns the smaller number.

//setting up test that takes a function with 2 numbers as argument and returns smaller number

describe ("When smallerNum gets called, return the number1 or number2", () =>{
    it ("if first number is smaller, return that number", () => {
        const argument1 = 5;
        const argument2 = 6;
        const actualResults = smallerNum(argument1, argument2 )
        expect(actualResults).toEqual(argument1)
    })
    it ("if second number is smaller, return that number", () => {
        const argument1 = 9;
        const argument2 = 4;
        const actualResults = smallerNum(argument1, argument2 )
        expect(actualResults).toEqual(argument2)
    })
})

const smallerNum = (number1,number2) =>{
    if (number1 < number2){
        return number1
    }else if (number2 < number1){
        return number2
    }
}


// 5. Write the test for a function that takes in one argument(number) and returns whether the number is odd.

test ("when oddNum is called, return whether number is odd", () => {
        const argument = 5 
        const actualResults = oddNum(argument)
        expect(actualResults).toEqual("odd")
    })
    
    const oddNum = (value) =>{
        if(value % 2 !== 0){
            return "odd"
        }
    }
// Write the function that will make the test pass.
// 6. Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

//set up a test for a function that will take in anrgument and return a string depending on the input   


describe ("when function fruitColor is called", () => {
    it ("if response is banana, return yellow ", () => {
        const argument = "banana";
        const actualResults = fruitColor(argument)
        expect(actualResults).toEqual("yellow")
    })
    it ("if response is apple, return red", () => {
        const argument = "apple";
        const actualResults = fruitColor(argument)
        expect(actualResults).toEqual("red")
    })
    it ("if response is grape, return purple", () => {
        const argument = "grape";
        const actualResults = fruitColor(argument)
        expect(actualResults).toEqual("purple")
    })
})
const fruitColor = (answer) => {
    if (answer === "apple") {
        return "red"
    } else if (answer === "banana") {
        return "yellow"
    }else if (answer === "grape") {
        return "purple"
    
    }
}


// Write the function that will make the test pass.
// 7. Write the test for a function called rick that returns "Morty".

test ("when function rickMort is called, return Morty", () =>{
    const argument = "rick" 
    const actualResults = rickMort(argument)
    expect(actualResults).toEqual("Morty")
})

const rickMort = (value) =>{
    if(value === "rick"){
        return "Morty"
    }
}



// Write the function that will make the test pass.
// 8. Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.

//set up test for function greeter that check if greeting with name is on screen 
//finction greeter takes a string "name"
//returns an a greeting with that name on the screen


test ("when function nameGreeting is called, return hello name", () =>{
    const argument = "rick" 
    const actualResults = nameGreeting(argument)
    expect(actualResults).toEqual(`hello ${argument}`)
})

const nameGreeting = (value) =>{
    if(typeof(value) ==="string" ){
        return `hello ${value}`
    }
}


// Write the function that will make the test pass.
// 9. Write the test for a function called oddOrEven that takes an number as an argument and logs whether the number is odd or even.

//setup a test that will check function oddOrEven
//oddOrEven must take a number as the argument and log whether it is odd or even

describe ("When oddOrEven gets called, return odd or even", () =>{
    it ("if number is odd, return odd", () => {
        const argument = 5;
        const actualResults = oddOrEven(argument)
        expect(actualResults).toEqual("odd")
    })
    it ("if number is even, return even", () => {
        const argument = 6;
        const actualResults = oddOrEven(argument)
        expect(actualResults).toEqual("even")
    })
})

const oddOrEven= (value) =>{
    if(value % 2 !== 0){
        return "odd"
    }else if(value % 2 === 0){
        return "even"
    }
}

// Write the function that will make the test pass.
// 10. Write the test for a function called doubler that takes an number and returns the result of the number multiplied by 2.
//setting up test that checks function double. 

//checking that function take a number as the argument and returns argument mupltipled by 2

test ("when function doubled is called, return in argument multiplied by 2", () =>{
    const argument = 25 
    const actualResults = doubled(argument)
    expect(actualResults).toEqual(argument * 2)
})

const doubled = (value) =>{
    return (value * 2)
}

// Write the function that will make the test pass.
// 11. Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.

//set up a test for function multiply
//checking function multiply takes 2 number as the arguments and returns argument1 multiplied by argument2

test ("when function multiply is called, return in argument1 multiplied by argument2", () =>{
    const argument1 = 25 
    const argument2 = 25
    const actualResults = multiply(argument1 , argument2)
    expect(actualResults).toEqual(argument1 * argument2)
})

const multiply = (value1 , value2) =>{
    return (value1 * value2)
}

// Write the function that will make the test pass.
// 12. Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

//set up a test for function divisibleBy
//checking function divisibleBy takes 2 number as the arguments and returns if argument1 can be evenly devided by argument2

describe ("when function divisibleBy is called", () =>{

    it ("if argument1 is evenly devided by argument2 , return `yes ${argument1} is evenly devided by ${argument2}`", () => {
        const argument1 = 6 
        const argument2 = 2
    const actualResults = divisibleBy(argument1 , argument2)
    expect(actualResults).toEqual(`Yes ${argument1} is evenly devided by ${argument2}`)
    })
     it ("if argument1 is not evenly devided by argument2 , return `no ${argument1} is not evenly devided by ${argument2}`", () => {
        const argument1 = 3 
        const argument2 = 2
        const actualResults = divisibleBy(argument1 , argument2)
        expect(actualResults).toEqual(`No ${argument1} is not evenly devided by ${argument2}`)
})
})

const divisibleBy = (value1 , value2) =>{
    if(value1 % value2 === 0){
        return `Yes ${value1} is evenly devided by ${value2}`
    }else if(value1 % value2 !== 0){
        return `No ${value1} is not evenly devided by ${value2}`
    }
}


// Write the function that will make the test pass.
// 13. Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.

//set up a test for function fizzbuzz
//checking function fizzbuzz takes 2 number as the arguments and returns if argument1 can be evenly devided by 3 or by 5
//if devisible by 3 return "fizz"
//if divisible by 5 return "buzz"
//if divisible by both 5 and 3 return "fizzbuzz"


describe ("when function fizzbuzz is called", () =>{

    it ("if argument is evenly devided by 3 , return fizz", () => {
        const argument = 6 
    const actualResults = fizzbuzz(argument)
    expect(actualResults).toEqual(`fizz`)
    })
     it ("if argument is evenly devided by 5 , return buzz", () => {
        const argument = 10 
    })    
     it ("if argument is evenly devided by 3 and 5 , return fizzbuzz", () => {
        const argument = 15 
        const actualResults = fizzbuzz(argument)
        expect(actualResults).toEqual(`fizzbuzz`)
})
})

const fizzbuzz = (value) =>{
    if(value % 3 === 0 && value % 5 === 0){
        return "fizzbuzz"
    }else if(value % 5 === 0){
        return "buzz"
    }
    else if(value % 3 === 0){
        return "fizz"
    }else
    return "try again"
}