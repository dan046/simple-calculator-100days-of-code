const autoPlayBtn = document.getElementById("js-auto-play-btn")
const rockBtn = document.getElementById("js-rock-btn")
const paperBtn = document.getElementById("js-paper-btn")
const scissorsBtn = document.getElementById("js-scissors-btn")
const resetBtn = document.getElementById("js-reset-btn")
const confirmAction = document.getElementById(
  "js-confirmation-action-container"
)

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  draw: 0,
}

rockBtn.addEventListener("click", () => playGame("✊"))
paperBtn.addEventListener("click", () => playGame("✋"))
scissorsBtn.addEventListener("click", () => playGame("✌️"))

document.body.addEventListener("keydown", (e) => {
  if (e.key === "r" && !e.ctrlKey) {
    playGame("✊")
  } else if (e.key === "p" && !e.ctrlKey) {
    playGame("✋")
  } else if (e.key === "s" && !e.ctrlKey) {
    playGame("✌️")
  } else if (e.key === "a" && !e.ctrlKey) {
    autoPlay()
  } else if (e.key === "Backspace" && !e.ctrlKey) {
    showResetConfirmation()
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

resetBtn.addEventListener("click", () => {
  showResetConfirmation()
})

function showResetConfirmation() {
  confirmAction.innerHTML = `
  <p>Are you sure you want to reset the score?</p>
  <button class="yes-btn" id="js-confirm-yes-btn">Yes</button>
  <button class="no-btn" id="js-confirm-no-btn">No</button>
  `
  const confirmYesBtn = document.getElementById("js-confirm-yes-btn")
  const confirmNoBtn = document.getElementById("js-confirm-no-btn")
  confirmYesBtn.addEventListener("click", () => {
    resetScore()
    hideResetConfirmation()
  })
  confirmNoBtn.addEventListener("click", () => {
    hideResetConfirmation()
  })
}

function hideResetConfirmation() {
  confirmAction.innerHTML = ""
}

function resetScore() {
  score.wins = 0
  score.losses = 0
  score.draw = 0
  localStorage.removeItem("score")
  displayScore()
}

// This allows hoisting
let isAutoPlay = false
let intervalId

autoPlayBtn.addEventListener("click", () => {
  autoPlay()
})

function autoPlay() {
  if (!isAutoPlay) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove()
      playGame(playerMove)
    }, 1000)
    isAutoPlay = true
    autoPlayBtn.innerHTML = "Stop"
  } else {
    clearInterval(intervalId)
    isAutoPlay = false
    autoPlayBtn.innerHTML = "Auto Play"
  }
}
