const displayAdded = document.getElementById("js-result")

let timeoutId
function updateBtn() {
  displayAdded.innerHTML = "Added"

  clearTimeout(timeoutId)

  timeoutId = setTimeout(() => {
    displayAdded.innerHTML = ""
  }, 2000)
}
