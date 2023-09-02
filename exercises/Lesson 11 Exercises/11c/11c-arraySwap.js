/*
arr.length returns the length of the array — a number.

arr.length - 1 subtracts one from that number, turning it into an index, because (since array indices are zero-based) if the array has 3 elements, the index of the first one is 0 and the index of the last one is 2. So length (which is 3) minus 1 gives us a 2.

arr[arr.length - 1] therefore returns the last element of the array.
*/

const arraySwap = (array) => {
  const lastIndex = array.length - 1

  // We need to save the values first before
  // swapping. Otherwise, if we swap directly,
  // we would lose one of the values.
  const lastValue = array[lastIndex]
  const firstValue = array[0]

  array[0] = lastValue
  array[lastIndex] = firstValue
  return array
}

console.log(arraySwap([1, 20, 22, 24, 5]))
console.log(arraySwap(["hi", "hello", "good"]))

/**
 * Array Destructing Method
 * let array = [1, 20, 22, 24, 5]
 * array = ["hi", "hello", "good"]
 * ;[array[0], array[array.length - 1]] = [array[array.length - 1], array[0]]
 * console.log(array)
 */

/**
 * Array.at() method
 * const fruits = ["Banana", "Orange", "Apple", "Mango"]
 * let index = 2
 * let fruit = fruits.at(index)
 * console.log(fruit)
 */

/*
const arraySwap = (array) => {
  const lastIndex = array.length - 1

  // We can use the .at() method to get the actual array element.
  // Then, we can assign that element to the variable.
  const firstValue = array.at(0)
  const secondValue = array.at(lastIndex)

  array[0] = secondValue
  array[lastIndex] = firstValue

  return array
}

console.log(arraySwap([1, 2, 3, 4, 5])) // [5, 2, 3, 4, 1]
console.log(arraySwap(["hi", "hello", "good"])) // [ 'good', 'hello', 'hi' ]
*/
