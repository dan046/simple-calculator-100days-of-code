const array1 = [1, -3, 5]
const array2 = [-2, 3, -5, 7, 10]

function positiveNumbers(array) {
  let positiveNum = 0

  array.forEach((value) => {
    if (value >= 0) positiveNum++
  })
  return positiveNum
}
console.log(positiveNumbers(array1)) // 2
console.log(positiveNumbers(array2)) // 3
