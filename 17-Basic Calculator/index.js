const buttonsEl = document.querySelectorAll("button");
const resultEL = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;

    if (buttonValue == "C") {
      clearResult();
    } else if (buttonValue == "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  resultEL.value = "";
}

function calculateResult() {
  resultEL.value = eval(resultEL.value);
}

function appendValue(buttonValue) {
  resultEL.value += buttonValue;
}
