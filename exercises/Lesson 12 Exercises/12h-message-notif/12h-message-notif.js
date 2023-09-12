let messages = 2

setInterval(() => {
  document.title === "App"
    ? (document.title = `(${messages}) New Messages`)
    : (document.title = "App")
}, 1000)
