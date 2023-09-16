const todo = document.getElementById("js-list")
const todoForm = document.getElementById("js-todo-form")
const formField = todoForm.elements["js-input-field"]
const formDate = todoForm.elements["js-date"]

// Create a dummy data
let todoList = [
  {
    name: "code, program",
    date: "2023-09-08",
  },
  {
    name: "make dinner",
    date: "2023-09-09",
  },
  {
    name: "wash dishes",
    date: "2023-09-09",
  },
]

// Create a function to display the items
const renderTodo = () => {
  let todoListHTML = ""

  todoList.forEach((items, index) => {
    const { name, date } = items
    const html = `
    <li class="list">
    <p>${name}</p>
    <p>${date}</p>
    <button class="delete-btn" data-index="${index}">Delete</button>
    </li>
    `
    todoListHTML += html
  })
  todo.innerHTML = todoListHTML

  // Add event listeners to delete buttons
  const deleteButtons = document.querySelectorAll(".delete-btn")
  // using querySelectorAll turns the delete button as an array. Meaning, we can use a loop for it.
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index")
      deleteTodo(index)
    })
  })
}

const deleteTodo = (i) => {
  todoList.splice(i, 1)
  renderTodo()
}

// Add event listener for form submission
todoForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const name = formField.value
  const date = formDate.value
  if (!name || !date) {
    document.getElementById("js-error").innerHTML =
      "<p class='error'>Fields must not be empty</p>"
    return
  }
  todoList.push({ name, date })
  renderTodo()
  formField.value = ""
  formDate.value = ""
})

// Initial rendering of the todo list
renderTodo()
