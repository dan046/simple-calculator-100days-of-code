const inputField = document.getElementById("js-input-list")
const todoContainer = document.getElementById("js-list-container")
const addBtn = document.getElementById("js-add-btn")
const dateField = document.getElementById("js-date")

let dummy = JSON.parse(localStorage.getItem("todoList")) || [{}]

const renderList = () => {
  let list = ""
  for (let i = 0; i < dummy.length; i++) {
    const itemObjects = dummy[i]
    const { todo, date } = itemObjects
    const html = `
    <li class="list-items">
    <p>${todo}</p>
    <p>${date}</p>
    <button class="delete-btn" onclick="
    deleteTodo(${i})
    "
    >Delete</button>
    </li>
    `
    list += html
  }
  todoContainer.innerHTML = list
}

renderList()

const deleteTodo = (id) => {
  dummy.splice(id, 1)
  localStorage.setItem("todoList", JSON.stringify(dummy))
  renderList()
}

const addToList = () => {
  const todo = inputField.value
  const date = dateField.value

  if (todo.trim() !== "" && date.trim() !== "") {
    dummy.push({ id: dummy.length + 1, todo, date })
    localStorage.setItem("todoList", JSON.stringify(dummy))
    inputField.value = ""
    dateField.value = ""
    renderList()
  } else {
    alert("Fields must not be empty")
    return
  }
}
