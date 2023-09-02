const array = [1, 2, 3]
const result = []

for (let i = 0; i < array.length; i++) {
  const element = (array[i] += 1)
  result.push(element)
}

console.log(result)
