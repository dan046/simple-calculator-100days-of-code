const rockBtn = document.getElementById("js-rock-btn")
const scissorsBtn = document.getElementById("js-paper-btn")
const paperBtn = document.getElementById("js-scissors-btn")
const autoPlayBtn = document.getElementById("js-autoPlay-btn")
const resetScoreBtn = document.getElementById("js-resetScore-btn")
const displayScoreEl = document.getElementById("js-score")
const playerMoveEl = document.getElementById("js-player-move")
const computerMoveEl = document.getElementById("js-computer-move")
const resultEl = document.getElementById("js-result")
const documentBody = document.body

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  draw: 0,
}

rockBtn.addEventListener("click", () => {
  playGame("✊")
})
scissorsBtn.addEventListener("click", () => {
  playGame("✋")
})
paperBtn.addEventListener("click", () => {
  playGame("✌️")
})

// Implemented keydown hotkeys for users to play using their keyboard keys.
documentBody.addEventListener("keydown", (e) => {
  if (e.key === "r") {
    playGame("✊")
  } else if (e.key === "p") {
    playGame("✋")
  } else if (e.key === "s") {
    playGame("✌️")
  }
})

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

  resultEl.innerHTML = `${result}`
  playerMoveEl.innerHTML = `You chose <span>${playerMove}</span>`
  computerMoveEl.innerHTML = `Computer chose <span>${computerMove}</span>`

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

function displayScore() {
  displayScoreEl.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Draw: ${score.draw}`
}
displayScore()

resetScoreBtn.addEventListener("click", () => {
  score.wins = 0
  score.losses = 0
  score.draw = 0
  localStorage.removeItem("score")
  displayScore()
})

// This allows hoisting
let isAutoPlay = false
let intervalId

autoPlayBtn.addEventListener("click", () => {
  if (!isAutoPlay) {
    autoPlayBtn.innerHTML = "Stop"
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove()
      playGame(playerMove)
    }, 1000)
    isAutoPlay = true
  } else {
    autoPlayBtn.innerHTML = "Auto play"
    clearInterval(intervalId)
    isAutoPlay = false
  }
})
