const removeEgg = (food) => {
  const result = []
  let eggsRemoved = 0

  for (let word of food) {
    if (word === "egg" && eggsRemoved < 2) {
      eggsRemoved++
      continue
    }
    result.push(word)
  }
  return result
}

console.log(removeEgg(["egg", "apple", "egg", "egg", "ham"]))
