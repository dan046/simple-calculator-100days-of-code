const removeEgg = (foods) => {
  const result = []

  for (let i = 0; i < foods.length; i++) {
    const word = foods[i]
    if (word === "egg") {
      continue
    }
    result.push(word)
  }
  return result
}

console.log(removeEgg(["egg", "apple", "egg", "egg", "ham"]))
