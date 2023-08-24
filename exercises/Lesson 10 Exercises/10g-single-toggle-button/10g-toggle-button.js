const isToggled = (btn) => {
  const button = document.querySelector(btn)
  // Add a validation to check if the button contains the target classname
  if (!button.classList.contains("is-toggled")) {
    // Add the separate function to turn off the previous button.
    turnOffPreviousButton()
    button.classList.add("is-toggled")
  } else button.classList.remove("is-toggled")
}

// Create a separate function to turn off the previous button that was given a classlist of is-toggled
const turnOffPreviousButton = () => {
  const previousButton = document.querySelector(".is-toggled")
  // Add a condition to check if the classlist exists.
  if (previousButton) previousButton.classList.remove("is-toggled")
}
