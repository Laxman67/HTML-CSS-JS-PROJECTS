function calculateLoan() {
  loadAmountValue = document.getElementById("loan-amount").value;
  interestRateValue = document.getElementById("interest-rate").value;
  monthsToPayValue = document.getElementById("months-to-pay").value;

  const interest =
    (loadAmountValue * (interestRateValue * 0.01)) / monthsToPayValue;
  document.getElementById(
    "payment"
  ).innerHTML = `Monthly Payments : ${interest.toFixed(2)}`;
}
