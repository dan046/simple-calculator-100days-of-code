const addNum = (array, num) => {
  const result = []
  for (let i = 0; i < array.length; i++) {
    const element = (array[i] += num)
    result.push(element)
  }
  return result
}

console.log(addNum([1, 2, 3], 2))
