const finish = document.getElementById("js-finish-btn")

finish.addEventListener("click", (e) => {
  e.preventDefault()
  finish.innerHTML = "Loading..."
  setTimeout(() => {
    finish.innerHTML = "Finished!"
  }, 1000)
})
