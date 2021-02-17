// Consider this variable:
// var person = {
//   firstName: "Arthur",
//   lastName: "Dent",
//   homePlanet: "Earth",
//   personHome: function(){
//     // return `${person.firstName} ${person.lastName} is from ${person.homePlanet}`
//     return `${this.firstName} ${this.lastName} is from ${this.homePlanet}`
//   }
// }


// Write the code that accesses the first name of the person object.
// console.log(person.firstName)

// Write the code that accesses the last name of the person object.
// console.log(person.lastName)

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

// Update the person object with a method that logs "Arthur Dent is from planet Earth".
// console.log(person.personHome())


// Consider this variable:
// var product = {
//   name: "chair", price: 14.99
// }


// Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".

// function that takes product as an argument
// returns a string that takes objects name and price
// string interpalates into 'The product is a "chair". It costs "$14.99"'

// const describeProduct = (product) => {
//   return `The product is a ${product.name}. It costs ${product.price}`
// }
// console.log(describeProduct(product))

// Consider this variable:
// var lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"]
// }
//
// // Write the code that accesses the ingredients property.
// console.log(lunch.ingredients)
//
// // Write the code that access the 3rd ingredient of the lunch object.
// console.log(lunch.ingredients[2]);
//
// // Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
//
// //create a function that takes lunch as an arguement
// //string interpolate name type and ingredients
// //return ingredients
//
// const howTo = (lunch) => {
//   return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients}.`
// }
// console.log(howTo(lunch))

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

// var lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"],
//   howTo: function() {
//     return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients}.`
//   }
// }
// console.log(lunch.howTo());

// Consider this variable:
// var animals = [
//   { name: "Waffles", type: "dog", age: 12 },
//   { name: "Fluffy", type: "cat", age: 14 },
//   { name: "Spelunky", type: "dog", age: 4 },
//   { name: "Hank", type: "cat", age: 11 },
// ]
//
// // Create a function that takes in any array of objects and returns a new array with only those of type cat.
// // Using the same array of objects above. Create a function that returns a new array with only the names of the animals.
//
// //create a function that takes an array of objects as an arguement
// //iterate through all of objects in array
// //filter out cat objects
// //return new array of cats
//
// const onlyCats = (array) => {
//   let cats = array.filter(object => {
//     return object.type === "cat"
//   })
//   return cats.map(object => {
//     return object.name
//   })
// }
//
// console.log(onlyCats(animals));


// Consider this variable:
// let author = {
//   name: "H. G. Wells",
//   genre: "science fiction"
// }


// Write the code that destructures the author object and makes the following work:

// let { name, genre } = author

// console.log(`${name} is a ${genre} author`)
// --> "H. G. Wells is a science fiction author"

// Consider this variable:

let pokeOne = {
    species: "Charmandar",
    pokemon_type: "Fire"
}

let pokeTwo = {
    species: "Magikarp",
    pokemon_type: "Water"
}


// Write a function called describePokemon() that take an object like the ones above and uses destructuring to return a description of the Pokemon such that:

// let { species, pokemon_type } = pokeOne, pokeTwo
// let { species, pokemon_type } = pokeTwo

// destructure objects to vaiables
// create a function that takes the objects 
// string interpilates the species and pokemon type

const describePokemon = (object) => {
  let { species, pokemon_type } = object
  return `${species} is a ${pokemon_type} pokemon.`
}

console.log(describePokemon(pokeOne))
// --> "Charmandar is a Fire pokemon"
console.log(describePokemon(pokeTwo))
// --> "Magikarp is a Water pokemon"
