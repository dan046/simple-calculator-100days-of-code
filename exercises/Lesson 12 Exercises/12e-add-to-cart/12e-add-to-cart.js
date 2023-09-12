const statusDisplay = document.getElementById("js-status")

function updateBtn() {
  statusDisplay.innerHTML = "Added"
  setTimeout(() => {
    statusDisplay.innerHTML = ""
  }, 2000)
}
