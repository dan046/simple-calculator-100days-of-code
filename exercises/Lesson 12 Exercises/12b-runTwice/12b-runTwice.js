function add() {
  console.log(2 + 3)
}
add()
add()

function runTwice(fun) {
  fun()
  fun()
}

runTwice(() => console.log("12b"))
runTwice(add)
