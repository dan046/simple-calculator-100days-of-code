const inputField = document.getElementById("js-input-field")
const addBtn = document.getElementById("js-add-btn")
const displayItems = document.getElementById("js-list")
const dateSelector = document.getElementById("js-date")

let todoList = [
  {
    name: "make dinner",
    dueDate: "2023-09-07",
  },
  {
    name: "wash dishes",
    dueDate: "2023-09-08",
  },
]

function renderTodoList() {
  let todoListHTML = ""

  todoList.forEach((items, index) => {
    const { name, dueDate } = items

    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button 
    class="delete-btn"
    onclick="
    deleteTodo(${index}, ${1})
    ">Delete</button>
    `
    displayItems.innerHTML = todoListHTML += html
  })
}
renderTodoList()

function deleteTodo(index, deleteCount) {
  todoList.splice(index, deleteCount)
  renderTodoList()
}
// Array push method
function addTodo() {
  const name = inputField.value
  const dueDate = dateSelector.value

  if (!name || !dueDate) {
    alert("fields must not be empty")
    return
  }

  todoList.push({
    name,
    dueDate,
  })

  inputField.value = ""
  dateSelector.value = ""
  renderTodoList()
}
