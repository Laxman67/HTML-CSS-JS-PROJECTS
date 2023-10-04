const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");
//
const currencySeondEl = document.getElementById("currency-second");
const worthSecondEL = document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange-rate");

const API_KEY = "b7c77a3e58465c5feb02055a";

updateRate();

function updateRate() {
  // https://v6.exchangerate-api.com/v6/api_key/latest/INR

  fetch(
    `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currencyFirstEl.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySeondEl.value];

      exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${
        rate + " " + currencySeondEl.value
      }`;
      worthSecondEL.value = worthFirstEl.value * rate;
    })
    .catch((error) => console.log(`Error Occured :${error}`));
}

currencyFirstEl.addEventListener("change", updateRate);

currencySeondEl.addEventListener("change", updateRate);

worthFirstEl.addEventListener("input", updateRate);
