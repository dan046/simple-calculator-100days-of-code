const finish = document.getElementById("js-finish-btn")
function finished() {
  finish.innerHTML = "Loading..."
  setTimeout(() => {
    finish.innerHTML = "Finished!"
  }, 1000)
}
