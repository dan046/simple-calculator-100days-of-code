const removeEgg = (food) => {
  const reverse = food.reverse()
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
console.log(removeEgg(["egg", "apple", "egg", "egg", "ham"]))
