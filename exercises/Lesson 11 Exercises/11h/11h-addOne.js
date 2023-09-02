const addOne = (array) => {
  const result = []
  for (let i = 0; i < array.length; i++) {
    const element = (array[i] += 1)
    result.push(element)
  }
  return result
}

console.log(addOne([1, 2, 3]))
console.log(addOne([-2, -1, 0, 99]))
