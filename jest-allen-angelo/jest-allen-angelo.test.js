// 1. Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

test("function returns 'drink coffee' if you are tired", () => {
    expect(areYouTired("yes")).toEqual("drink coffee")
})

test("function return 'keep working' if you are not tired", () => {
    expect(areYouTired("no")).toEqual("keep working")
})

// Write the function that will make the test pass.
// Create a function that takes in one argument on if the person is tired
const areYouTired = (tiredState) => {
    // Need if/else conditionals to check if the person is tired
    if (tiredState === "yes") {
        // Return 'drink coffee' if tired (case 1)
        return 'drink coffee';
    } else if (tiredState === "no") {
        // Return 'keep working' if not tired (case 2)
        return 'keep working';
    } else {
        return 'something went wrong'
    }
}