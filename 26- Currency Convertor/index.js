const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");
//
const currencySeondEl = document.getElementById("currency-second");
const worthSeond = document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange-rate");

function updateRate(event) {}

currencyFirstEl.addEventListener("change", updateRate);

currencySeondEl.addEventListener("change", updateRate);

worthFirstEl.addEventListener("input", updateRate);
