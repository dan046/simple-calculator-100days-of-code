/**
 * Arrays just like Objects, are References.
 */

const array1 = [1, 2, 3]

/**
 * This variable doesn't actually contains the values 1,2,3.
 * The array is saved somewhere in the computers memory.
 * This variable only contains a reference that points to where this array is saved in the computers memory.
 *
 * That means, if we create a copy of this variable,
 */

// const array2 = array1

/**
 * Array2 doesn't contain a copy of the values, it actually just contain a copy of the reference.
 * So now, both these variables are pointing to the same array.
 * So, if we did, array2.push()
 */

// array2.push(4)
// console.log(array1) // [ 1, 2, 3, 4 ]
// console.log(array2) // [ 1, 2, 3, 4 ]

/**
 * It will show us that even though we added 4 to array2, array1 and array2 were both modified. That's because arrays are references. Both of these variables point to the same array stored somewhere in memory.
 *
 * To avoid this behavior, we can create a copy of the values in the array using a method called slice()
 *
 */
// console.log(array1) // [ 1, 2, 3]

// const array2 = array1.slice()
// array2.push(4)
// console.log(array2) // [ 1, 2, 3, 4 ]

/**
 * If we did, array1.slice(), this will make a copy of the values in array1. And now, these two variables point to two different arrays.
 * As you can seee, it only affected the variable array2.
 */

/**
 * The second detail, Destructuring
 */

// const array3 = [1, 2, 3]

/**
 * Let's say we want to get the first and second value out of this array.
 */

// Index method
// const firstValue = array3[0]
// const secondValue = array3[1]

// Destructuring method
// const [firstValue, secondValue] = [1, 2, 3]
// console.log(firstValue) // 1
// console.log(secondValue) // 2

/**
 * More details about loops
 * Loops have two features.
 * break - exits a loop early
 * continue - skip 1 iteration of the loop or 1 run of the loop.
 */

// for (let i = 1; i <= 10; i++) {
//   if (i === 3) continue // 1, 2, 4, 5, 6, 7, 8
//   console.log(i)
//   if (i === 8) break // 1, 2, 3, 4, 5, 6, 7, 8
// }

// Let's say we want to skip a number if it's divisible by 3. One and itself.
// Divisible by 3 means the number can be divided evenly into 3.

// for (let i = 1; i <= 10; i++) {
//   if (i % 3 === 0) continue // If the value is divisible by 3 and has a remainder of 0
//   console.log(i)
//   if (i === 8) break
// }

/**
 * Using continue in a while loop
 */

/*
let i = 1

while (i <= 10) {
  if (i % 3 === 0) {
    i++
    continue
  }
  console.log(i)
  i++
}
*/

/**
 * When using continue in a while you, remember that you need to do the increment step manually to prevent infinite loops.
 *
 * In a for...loop, the increment step is done automatically after every iteration.
 */

/**
 * How to use loops with functions
 */

// Let's say we have an array of numbers and we want to create a copy of this array where each number is doubled

const doubleNumbers = (nums) => {
  const result = []

  for (let i = 0; i < nums.length; i++) {
    const values = (nums[i] *= 2)
    /**
     * Let's say if we see the number 0, stop this loop early.
     */
    if (values === 0) return result
    result.push(values)
  }

  /**
   * Another feature when using functions with a loop is that we can break out of this loop using a return statement instead.
   */

  return result
}

console.log(doubleNumbers([1, 1, 3])) // [ 2, 2, 6 ]
console.log(doubleNumbers([2, 2, 5])) // [ 4, 4, 10 ]
console.log(doubleNumbers([2, 2, 5, 0, 5])) // [ 4, 4, 10 ]

/**
 * You notice that the loop stops
 * [ 4, 4, 10 ]
 * If we don't have the return statement inside the loop along with the condition,
 * [ 4, 4, 10, 0, 10 ]
 *
 * Return is another way of breaking out of a loop when inside a function.
 */

/**
 * Summary
 * Arrays = list of values
 * Loops (while and for...loops)
 * Accumulator Pattern
 * Created a basic todoList Project
 * Arrays are references and destructuring methods
 * More features of loops: break, continue, loops inside function and return statements.
 */
