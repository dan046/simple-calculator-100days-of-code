const minMax = (nums) => {
  let min = nums[0]
  let max = nums[0]

  if (!nums.length) return { min: null, max: null }

  for (let i = 0; i < nums.length; i++) {
    const index = nums[i]

    if (index < min) {
      min = index
    }
    if (index > max) {
      max = index
    }
  }
  return {
    min: min,
    max: max,
  }
}

console.log(minMax([1, -3, 5]))
console.log(minMax([-2, 3, -5, 7, 10]))
console.log(minMax([]))
console.log(minMax([3]))

const minMaxOf = (nums) => {
  let min = nums[0]
  let max = nums[0]

  if (!nums.length) return { min: null, max: null }

  for (const value of nums) {
    if (value < min) {
      min = value
    }
    if (value > max) {
      max = value
    }
  }
  return {
    min,
    max,
  }
}

console.log(minMaxOf([1, -3, 5]))
console.log(minMaxOf([-2, 3, -5, 7, 10]))
console.log(minMaxOf([]))
console.log(minMaxOf([3]))
