for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzBuzz")
  }
  if (i % 3 === 0) {
    console.log("fizz")
  }
  if (i % 5 === 0) {
    console.log("buzz")
  } else console.log(i)
}

// Tried the ternary version. However, I realized this is harder to maintain, scale and read once the code grows big or accepts more conditions.
for (let i = 1; i <= 20; i++) {
  i % 3 === 0 && i % 5 === 0
    ? console.log("fizzBuzz")
    : i % 3 === 0
    ? console.log("fizz")
    : i % 5 === 0
    ? console.log("buzz")
    : console.log(i)
}
