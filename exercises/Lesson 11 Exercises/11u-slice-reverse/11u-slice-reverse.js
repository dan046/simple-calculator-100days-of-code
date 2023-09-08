const removeEgg = (food) => {
  const slice = food.slice() // creates a copy of the array
  const reverse = slice.reverse()
  const result = []
  let removedEgg = 0

  for (let word of reverse) {
    if (word === "egg" && removedEgg < 2) {
      removedEgg++
      continue
    }
    result.push(word)
  }
  return result.reverse()
}
const foods = ["egg", "apple", "egg", "egg", "ham"]
console.log(removeEgg(foods))
console.log(foods)
