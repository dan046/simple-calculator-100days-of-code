/**
 * Exercise:
 * Create a function minMax(nums) that takes an array of numbers and returns an object with the minimum and maximum numbers in the array (do this using a loop instead of using something like Math.min).
 */

const minMax = (nums) => {
  const result = {
    min: 0, // should be nums[0]
    max: 0, // should be nums[0]
  }

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i]
    if (value < result.min) {
      result.min = value
    }
    if (value > result.max) {
      result.max = value
    }
  }
  console.log(result)
}

minMax([1, -3, 5]) // { min: -3, max: 5 }
minMax([-2, 3, -5, 7, 10]) // { min: -5, max: 10 }
minMax([-2, 0, -1, 55, 23]) // { min: -2, max: 55 }
