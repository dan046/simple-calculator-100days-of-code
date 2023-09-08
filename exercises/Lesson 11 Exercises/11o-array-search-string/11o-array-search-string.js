let array = ["hello", "world", "search", "good"]
let index = -1

for (let i = 0; i < array.length; i++) {
  const words = array[i]

  if (words === "search") index = i
}

console.log(index)

array = ["not", "found"]
index = -1

for (let i = 0; i < array.length; i++) {
  const words = array[i]

  if (words === "search") index = i
}
console.log(index)
