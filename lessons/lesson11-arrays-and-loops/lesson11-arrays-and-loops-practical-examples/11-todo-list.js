const inputField = document.getElementById("js-input-field")
const addBtn = document.getElementById("js-add-btn")
const displayItems = document.getElementById("js-list")

let list = ["make dinner", "wash dishes", "masturbate"]

const renderTodoList = () => {
  let todoListHTML = ""
  for (let i = 0; i < list.length; i++) {
    const items = list[i]
    const html = `<li>${items}</li>`
    displayItems.innerHTML = todoListHTML += html
  }
}
renderTodoList()

// Spread operator method.
const addToList = () => {
  list = [...list, inputField.value]
  console.log(list)
  inputField.value = ""
  renderTodoList()
}

// Array push method
const addTodo = () => {
  list.push(inputField.value)
  console.log(list)
  inputField.value = ""
}

/**
 * Steps (Algorithm)
 * 1. Loop through the array.
 * 2. Create some HTML code for each todo
 * 3. Put that code into the webpage using the DOM.
 */
