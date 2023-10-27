document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".buttons button");
  const resultSpan = document.querySelector(".result");


  let currentInput = ""; // Número atual
  let currentOperation = ""; // Operação atual
  let lastInput = ""; // Último número inserido
  let hasCalculated = false; // Indica se o cálculo foi realizado


  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonText = button.textContent;

      if (!isNaN(buttonText) || buttonText === ".") {
        if (hasCalculated) {
          currentInput = buttonText;
          hasCalculated = false;
        } else {
          currentInput += buttonText;
        }
      } else if (buttonText === "C") {
        currentInput = "0";
        currentOperation = "";
        lastInput = "";
        hasCalculated = false;
      } else if (buttonText === "=") {
        if (currentInput && currentOperation && lastInput) {
          const num1 = parseFloat(lastInput);
          const num2 = parseFloat(currentInput);


          switch (currentOperation) {
            case "+":
              currentInput = (num1 + num2).toString();
              break;
            case "-":
              currentInput = (num1 - num2).toString();
              break;
            case "*":
              currentInput = (num1 * num2).toString();
              break;
            case "/":
              if (num2 !== 0) {
                currentInput = (num1 / num2).toString();
              } else {
                currentInput = "Erro: Divisão por zero!";
              }
              break;
          }

          hasCalculated = true;
          currentOperation = "";
          lastInput = "";
        }
      } else {
        if (currentInput && !currentOperation) {
          lastInput = currentInput;
          currentOperation = buttonText;
          currentInput = "";
        }
      }

      resultSpan.textContent = currentInput;

      
      if (parseFloat(currentInput) > 20) {
        resultSpan.style.backgroundColor = "green";
      } else {
        resultSpan.style.backgroundColor = "orange";
      }
    });
  });
});
