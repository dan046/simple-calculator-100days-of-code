const result = document.getElementById("js-result")
const error = document.getElementById("js-error")
const calculateCost = () => {
  const inputText = document.getElementById("js-input-text")

  let cost = Number(inputText.value) * 100

  if (cost < 0) return (error.innerHTML = `Error: cost cannot be less than $0`)
  if (cost < 4000) {
    result.innerHTML = `$${(cost += 1000) / 100}`
    error.innerHTML = ``
  } else {
    result.innerHTML = `$${cost / 100}`
    error.innerHTML = ``
  }
}

const onEnter = (event) => {
  if (event.key === "Enter") calculateCost()
}
