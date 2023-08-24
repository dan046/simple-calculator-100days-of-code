const gamingBtn = document.getElementById("js-btn-gaming")
const musicBtn = document.getElementById("js-btn-music")
const techBtn = document.getElementById("js-btn-tech")

const isGamingToggled = () => {
  !gamingBtn.classList.contains("btn-is-toggled")
    ? gamingBtn.classList.add("btn-is-toggled")
    : gamingBtn.classList.remove("btn-is-toggled")
}

const isMusicToggled = () => {
  !musicBtn.classList.contains("btn-is-toggled")
    ? musicBtn.classList.add("btn-is-toggled")
    : musicBtn.classList.remove("btn-is-toggled")
}

const isTechToggled = () => {
  !techBtn.classList.contains("btn-is-toggled")
    ? techBtn.classList.add("btn-is-toggled")
    : techBtn.classList.remove("btn-is-toggled")
}
