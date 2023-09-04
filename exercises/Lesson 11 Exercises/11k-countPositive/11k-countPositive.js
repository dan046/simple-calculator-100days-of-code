const countPositive = (nums) => {
  let result = 0

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i]
    if (element > 0) {
      result++
    }
  }
  console.log(result)
}

countPositive([1, -3, 5])
countPositive([-2, 3, -5, 7, 10])
