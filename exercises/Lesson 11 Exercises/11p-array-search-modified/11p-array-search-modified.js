let array = ["hello", "world", "search", "good", "search"]

let index = -1

for (let i = 0; i < array.length; i++) {
  const word = array[i]
  if (word === "search") {
    index = i
    break
  }
}
console.log(index)

array = ["not", "found"]
index = -1

for (let i = 0; i < array.length; i++) {
  const words = array[i]

  if (words === "search") {
    index = i
    break
  }
}
console.log(index)
