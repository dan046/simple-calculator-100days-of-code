const countWordsEach = (words) => {
  const result = {}

  words.forEach((element) => {
    result[element] = (result[element] || 0) + 1
  })
  console.log(result)
}
countWordsEach(["apple", "apple", "apple", "orange", "banana", "banana"])

const countWords = (words) => {
  const result = {}

  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    result[word] = (result[word] || 0) + 1
  }
  console.log(result)
}
countWords(["apple", "apple", "apple", "orange", "banana", "banana"])
