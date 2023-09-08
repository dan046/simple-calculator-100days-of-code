const findIndex = (array, word) => {
  let index = -1

  for (let i = 0; i < array.length; i++) {
    const indexWord = array[i]

    if (indexWord === word) return i
  }
  return index
}

console.log(findIndex(["green", "red", "blue", "red"], "red"))
console.log(findIndex(["green", "red", "blue", "red"], "yellow"))
