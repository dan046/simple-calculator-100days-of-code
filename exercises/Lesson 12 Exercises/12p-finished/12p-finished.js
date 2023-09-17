const finish = document.getElementById("js-finish-btn")

const finished = () => {
  finish.innerHTML = "Loading..."
  setTimeout(() => {
    finish.innerHTML = "Finished!"
  }, 1000)
}
