const inputField = document.getElementById("js-input-field")
const addBtn = document.getElementById("js-add-btn")
const displayItems = document.getElementById("js-list")
const dateSelector = document.getElementById("js-date")

let todoList = [
  {
    name: "wash dishes",
    dueDate: "2023-09-07",
  },
  {
    name: "masturbate",
    dueDate: "2023-09-08",
  },
]

const renderTodoList = () => {
  let todoListHTML = ""
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i]

    const { name, dueDate } = todoObject

    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button 
    class="delete-btn"
    onclick="
    todoList.splice(${i}, 1)
    renderTodoList()
    ">Delete</button>
    `
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
  const name = inputField.value
  const dueDate = dateSelector.value

  todoList.push({
    name,
    dueDate,
  })

  // Resets the input field
  inputField.value = ""
  dateSelector.value = ""
  renderTodoList()
}

/**
 * Steps (Algorithm)
 * 1. Loop through the array.
 * 2. Create some HTML code for each todo
 * 3. Put that code into the webpage using the DOM.
 */
