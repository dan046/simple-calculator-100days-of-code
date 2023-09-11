const findIndex = (array, word) => {
  for (let i = 0; i < array.length; i++) {
    const indexWord = array[i]

    if (indexWord === word) return i
  }
  return -1
}

console.log(findIndex(["green", "red", "blue", "red"], "red"))
console.log(findIndex(["green", "red", "blue", "red"], "yellow"))

const unique = (array) => {
  const result = []
  for (let i = 0; i < array.length; i++) {
    const word = array[i]
    if (findIndex(result, word) === -1) result.push(word)
  }
  return result
}

console.log(unique(["green", "red", "blue", "red"]))
console.log(unique(["green", "red", "blue", "red", "yellow", "green"]))
