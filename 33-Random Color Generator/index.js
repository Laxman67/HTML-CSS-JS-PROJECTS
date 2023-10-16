const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}

// setInterval(() => {
//   GenerateColor();
// }, 4000);

const colorContainerEls = document.querySelectorAll(".color-container");

function GenerateColor() {
  colorContainerEls.forEach((colorContainer) => {
    const colorCodes = randomColor();
    colorContainer.innerText = "#" + colorCodes;
    colorContainer.style.backgroundColor = colorContainer.innerText;
  });
}

GenerateColor();

function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLenght = 6;
  let colorCode = "";

  for (let index = 0; index < colorCodeLenght; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}
