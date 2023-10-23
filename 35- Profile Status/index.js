const countersEl = document.querySelectorAll(".counter");

countersEl.forEach((counterEle) => {
  counterEle.innerText = "0";
  incrementCounter();

  function incrementCounter() {
    let currentNum = +counterEle.innerText;
    const dataCeil = counterEle.getAttribute("data-ceil");

    const increment = dataCeil / 15;
    currentNum = Math.ceil(currentNum + increment);
    counterEle.innerText = currentNum;

    if (currentNum < dataCeil) {
      setTimeout(incrementCounter, 50);
    } else {
      countersEl.innerText = dataCeil;
    }
  }
});
