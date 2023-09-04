const addArrays = (arr1, arr2) => {
  let result = []

  if (!Array.isArray(arr1) || !Array.isArray(arr2))
    return console.log("not an array or empty")

  for (let i = 0; i < arr1.length; i++) {
    const element = (arr1[i] += arr2[i])
    result.push(element)
  }
  console.log(result)
}

addArrays([1, 1, 2], [1, 1, 3]) // [ 2, 2, 5 ]
addArrays([1, 2, 3], [4, 5, 6]) // [ 5, 7, 9 ]
addArrays() // empty
