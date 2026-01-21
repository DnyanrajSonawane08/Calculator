let expDisplay = document.getElementById("expression");
let resultDisplay = document.getElementById("result");
let themeLabel = document.querySelector(".themeLabel");

let expression = "";

// Button Logic
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    let val = button.dataset.val;

    // CLEAR
    if (val === "AC") {
      expression = "";
      expDisplay.innerText = "";
      resultDisplay.innerText = "0";
      return;
    }

    // BACKSPACE
    if (val === "back") {
      expression = expression.trim().slice(0, -1);
      expDisplay.innerText = expression;
      resultDisplay.innerText = expression || "0";
      return;
    }

    // NEGATE
    if (val === "neg") {
      if (expression) {
        try {
          expression = String(-eval(expression));
          expDisplay.innerText = expression;
          resultDisplay.innerText = expression;
        } catch {
          resultDisplay.innerText = "Error";
        }
      }
      return;
    }

    // PERCENT
    if (val === "%") {
      try {
        expression = String(eval(expression) / 100);
        expDisplay.innerText = expression;
        resultDisplay.innerText = expression;
      } catch {
        resultDisplay.innerText = "Error";
      }
      return;
    }

    // EVALUATE
    if (val === "=") {
      try {
        let output = eval(expression.replace("÷", "/").replace("×", "*"));
        expDisplay.innerText = expression + " =";
        resultDisplay.innerText = output;
        expression = String(output);
      } catch {
        resultDisplay.innerText = "Error";
      }
      return;
    }

    // BUILD EXPRESSION
    if (["+", "-", "*", "/", "÷", "×"].includes(val)) {
      if (val === "÷") val = "/";
      if (val === "×") val = "*";
      expression += " " + val + " ";
    } else {
      expression += val;
    }

    expDisplay.innerText = expression;
    resultDisplay.innerText = expression;
  });
});

// THEME TOGGLE
document.getElementById("themeSwitch").addEventListener("change", () => {
  document.body.classList.toggle("dark");
  themeLabel.innerText = document.body.classList.contains("dark")
    ? "Light Mode"
    : "Dark Mode";
});
