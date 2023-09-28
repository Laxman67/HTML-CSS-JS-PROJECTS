const btnEl = document.getElementById("btn");
const bmiResult = document.getElementById("bmi-result");
const weightCondiEl = document.getElementById("info-text");

function calculateBMI() {
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;

  const bmiValue = weightValue / heightValue ** 2;

  bmiResult.value = bmiValue;

  if (bmiResult.value < 18.5) {
    weightCondiEl.innerText = "Under weight";
  } else if (bmiResult.value >= 18.5 && bmiResult.value <= 24.9) {
    weightCondiEl.innerText = "Normal weight";
  } else if (bmiResult.value >= 25 && bmiResult.value <= 29.9) {
    weightCondiEl.innerText = "Overweight";
  } else if (bmiResult.value >= 30) {
    weightCondiEl.innerText = "Obesity";
  }
}

btnEl.addEventListener("click", calculateBMI);
