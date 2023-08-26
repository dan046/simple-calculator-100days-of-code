let calculation = localStorage.getItem("calculation") || ""

      const displayCalculation = () => {
        const result = document.getElementById("js-calc-output")
        result.innerHTML = calculation
      }

      displayCalculation()

      function updateCalculation(value) {
        calculation += value
        displayCalculation()
        localStorage.setItem("calculation", calculation)
      }

      function saveCalculation() {
        localStorage.setItem("calculation", calculation)
      }