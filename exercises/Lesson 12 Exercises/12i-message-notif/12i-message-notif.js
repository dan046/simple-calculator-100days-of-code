let messages = 2

let intervalId
let displayNotif

function displayNotification() {
  if (displayNotif) return
  displayNotif = true
  intervalId = setInterval(() => {
    if (document.title === "App") {
      document.title = `(${messages}) New Messages`
    } else {
      document.title = "App"
    }
  }, 1000)
}

function stopNotification() {
  displayNotif = false
  clearInterval(intervalId)
  document.title = "App"
}

function add() {
  messages++
  displayNotification()
}

function remove() {
  if (messages > 0) {
    messages--
  }
  if (messages === 0) {
    stopNotification()
  }
}
