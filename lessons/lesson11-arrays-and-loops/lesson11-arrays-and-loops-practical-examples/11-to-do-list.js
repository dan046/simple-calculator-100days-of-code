const inputField = document.getElementById("js-input-field")
const submitBtn = document.getElementById("js-add-btn")
const renderList = document.getElementById("js-list")

let list = []

const addTodo = () => {
  const inputValue = inputField.value

  if (!inputValue) {
    alert("Field must not be empty")
    return
  }

  list = [...list, inputValue]

  console.log(list)
  let todo = ""
  for (const items of list) {
    renderList.innerHTML = todo += `<li>${items}</li>`
  }
  inputField.value = ""
}
