const array = [10, 20, 30]
console.log(array)
// Array is a list of values

array[0] // The number inside the brackets represent the first value, the index.
console.log(array[0]) // 10
console.log(array[1]) // 20

// We can also change the value in an array
array[0] = 69
console.log(array) // [ 69, 20, 30 ]

/**
 * Syntax Rules for Arrays
 *
 * 1. To create an array, we start with an open square bracket and we end with a closed square bracket. Inside, we can put a list of values and we separate each value with a comma. We can also write an array on multiple lines like this.
 */

const array2 = [
  10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170,
  180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320,
  330, 340,
]

/**
 * 2. To get a value inside an array, we can use the square brackets and putting in the index like one.
 * Index, represents the position in the array that we want to get. Indexes start always with 0. Which is called, 0-indexed array.
 */

console.log(array2[1])

/**
 * 3. Inside an array, we can put any type of value. Note, an array itself is also a value. Which means we can save arrays in a variable. Or even save it in an array.
 */

const array3 = [1, "hello", true, { name: "socks" }, [1, 2]]

/**
 * 4. Arrays have a weird behaviour. When we try to check the type of an array.
 *
 * An array is actually an object, but it is just a special type of object.
 * If we want to check if something is specifically an array, we can use the Array.isArray().
 *
 * Inside the parenthesis, we put an array.
 */

console.log(typeof [1, 2]) // This will tell us that an array is an object.

console.log(Array.isArray([1, 2])) // This checks if a value is an array. Result: true
console.log(Array.isArray("hello")) // false because this is not an array but a string.

/**
 * 5. Finally, because arrays are just a type of object, they also have properties and methods we can use.
 *
 * One useful property is the .length() method.
 *
 * This method tells us how many values are inside the array.
 */

console.log(array2.length) // 34

/**
 * .push() method
 * This adds a value to the end of the array.
 */

array2.push(350)
console.log(array2) // 350 is added to the end of the array.

/**
 * .splice() method
 * This removes a value from an array.
 *
 * The splice method takes in two parameters. The first parameter accepts the index that we want to remove. The second number we give to the splice method is the number of values we want to remove.
 *
 * Let's say if we give it a value of 1. it will remove one value at index zero.
 */

/**
 * const array = [10, 20, 30]
 * // Starting at index 0, removing one value. In this case, 10 is removed.
 * array.splice(0, 1)
 *
 * console.log(array)
 * // [20, 30]
 */

/**
 * If we give it a value of 2.
 */

array.splice(0, 2)
// Starting at index 0, removing 2 values. In this case, 10 and 20 are removed.
console.log(array)
// [30]

const inputField = document.getElementById("js-input-field")
const addBtn = document.getElementById("js-add-btn")
const displayItems = document.getElementById("js-list")

let list = []

// Spread operator method.
const addToList = () => {
  list = [...list, inputField.value]
  console.log(list)
  inputField.value = ""

  /*
    let i = 1
    while (i <= 5) {
        console.log(i)
        i++
    }
    */
  /*
  const todoList = ["make dinner", "wash dishes", "masturbate"]
  for (let i = 0; i < todoList.length; i++) {
    const value = todoList[i]
    console.log(value)
  }
*/

  // Accumulator Pattern
  const nums = [1, 1, 3]
  //   const total = nums.reduce((acc, currentValue) => acc + currentValue)
  let total = 0
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    total += num
  }
  console.log(total)

  // Let's say we want to create a copy of the array with each number doubled.

  let doubled = []

  // Notice that in the previous example, the accumulator variable is a number. In this example, the accumulator variable is an array. We can use different types of values to accumulate the result.

  // It all depends on the problem that we're trying to solve.

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    doubled.push(num * 2)
    // doubled = [...doubled, num * 2] // Spread version
  }
  console.log(doubled)
}

/**
 * Accumulator Pattern
 * 1. Create a variable to store the result
 * 2. Loop through the array and update the result.
 *
 * Notice, that as we loop through the array, we're adding or accumulating the results into the total variable.
 * with let total = 0 being the accumulator variable.
 */

// Array push method
const addTodo = () => {
  list.push(inputField.value)
  console.log(list)
  inputField.value = ""
}

/**
 * Step by Step on how the while loop works
 * 1. We create a variable i and we make it equal to 1 and then we do a loop.
 *
 * if the condition is true, the computer will keep running the code over and over again.
 *
 * The first time it loops, i = 1. It displays 1 on the console.
 * We go back to the top and check the condition again. If the value is still less than the given condition which is i <= 5, we will increment i again.
 * Since the value is still less than the condition, we increase the value of i. i = 2. It displays 2 on the console.
 *
 * We repeat the same procedure. As long as i is less than or equal 5, we continue to increment i. We increase the value of i again. i = 3. It displays 3 on the console.
 *
 * This continues until we reach the condition or as soon the condition becomes false. the loop stops.
 */

/**
 * Syntax rules for a while loop.
 *
 * To create a while loop, we declare the method
 *
 * let i = 1 // loop variable
 *
 * while(condition){
 * ...code or loop body
 * i += 1
 * }
 *
 * Every time we loop, we are going to increase the loop variable.
 * i += 1 or i = i + 1 or i++, the increment step.
 *
 * The increment step, makes sure that the loop ends at some point. Without this increment, the loop will just keep going forever and quite possibly crash your browser or program which results in an "infinite loop".
 *
 * Each time we run the code inside the loop, it is called an "iteration".
 * In the example, we run the code or loop 5 times.
 *
 * Lastly, loops create a scope.
 *
 * Any variable that we create inside the loop body will only exist inside the loop body. Other codes cannot access it.
 *
 * While (condition) is true, it will keep running the code over and over again
 * Once the (condition) is false, the code stops executing and go to the next line.
 *
 */

/**
 * How to use the for...loop
 *
 * for ()
 * Inside the parenthesis, we will declare 3 pieces of code.
 * First, we declare a loop variable.
 * for (let i = 1; )
 *
 * Second, we declare a second piece of code which is the loop condition.
 * for (let i = 1; i <= 5;)
 *
 * Third, we declare the last piece of code which is the increment step.
 * for (let i = 1; i<=5; i++) {
 * ...code or loop body
 * }
 *
 * Inside the curly brackets, we write the code that we want to loop over and over.
 *
 * for (let i = 1; i<=5; i++) {
 * console.log(i)
 * }
 *
 * This for...loop does the same thing as the while...loop. It counts from 1 to 5.
 *
 * If we compare the codes, the for...loop is just a shorter version of the while loop.
 *
 * Instead of writing the loop variable condition and increment step separately, we group them together instead in one line..
 */

/**
 * Which loop should we use? While vs. for...loop
 *
 * If we're doing a standard loop, it's recommended to use a for loop because a for...loop is shorter and more organized than a while loop.
 *
 * However, if it's a non-standard loop, then it might be better to use a while...loop.
 *
 * What's an example of a non-standard loop?
 *
 * Let's say we want to generate random numbers until we get a number that's at least 0.5.
 *
 * To create this loop, we create a variable that will store the random number.
 */

/**
 let randomNumber = 0
 * And then we'll do a while loop.
 
 while (randomNumber < 0.5) {
     randomNumber = Math.random()
    }
    console.log(randomNumber)
    */
/**
 * If the random number is less than 0.5, it will keep generating a number until we get a number that is atleast 0.5.
 *
 * This is an example of a non standard loop.
 * It doesn't really have a loop variable that we increase every time and it also doesn't have the increment step.
 */

/**
 * Looping through an array.
 * 1. Go through each value of an array one by one.
 * 2. Do something with each value.
 */
