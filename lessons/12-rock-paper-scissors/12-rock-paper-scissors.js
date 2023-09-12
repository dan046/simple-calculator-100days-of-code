let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  draw: 0,
}

function playGame(playerMove) {
  const computerMove = pickComputerMove()

  let result = ""

  if (playerMove === "✌️") {
    if (computerMove === "✊") {
      result = "You lose."
    } else if (computerMove === "✋") {
      result = "You win."
    } else if (computerMove === "✌️") {
      result = "It's a tie."
    }
  } else if (playerMove === "✋") {
    if (computerMove === "✊") {
      result = "You win."
    } else if (computerMove === "✋") {
      result = "It's a tie."
    } else if (computerMove === "✌️") {
      result = "You lose."
    }
  } else if (playerMove === "✊") {
    if (computerMove === "✊") {
      result = "It's a tie."
    } else if (computerMove === "✋") {
      result = "You lose."
    } else if (computerMove === "✌️") {
      result = "You win."
    }
  }

  if (result === "You win.") {
    score.wins += 1
  } else if (result === "You lose.") {
    score.losses += 1
  } else score.draw += 1

  // How to use local storage.
  localStorage.setItem("score", JSON.stringify(score))
  document.getElementById("js-result").innerHTML = `${result}`

  document.getElementById(
    "js-player-move"
  ).innerHTML = `You chose <span>${playerMove}</span>`

  document.getElementById(
    "js-computer-move"
  ).innerHTML = `Computer chose <span>${computerMove}</span>`

  displayScore()
}

function pickComputerMove() {
  const randomNumber = Math.random()

  let computerMove = ""

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "✊"
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "✋"
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "✌️"
  }

  return computerMove
}

const displayScore = () => {
  document.getElementById(
    "js-score"
  ).innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Draw: ${score.draw}`
}
displayScore()

const resetScore = () => {
  score.wins = 0
  score.losses = 0
  score.draw = 0
  localStorage.removeItem("score")
  displayScore()
}

// This allows hoisting
let isAutoPlay = false
let intervalId
function autoPlay() {
  if (!isAutoPlay) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove()
      playGame(playerMove)
    }, 1000)
    isAutoPlay = true
  } else {
    clearInterval(intervalId)
    isAutoPlay = false
  }
}
