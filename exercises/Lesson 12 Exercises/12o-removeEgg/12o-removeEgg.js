const removeEgg = (foods) => {
  let returnEggs = 0
  return foods.filter((food) => {
    if (food === "egg" && returnEggs < 2) {
      returnEggs++
      return false
    }
    return true
  })
}

console.log(removeEgg(["egg", "apple", "egg", "egg", "ham"]))
