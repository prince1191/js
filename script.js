const convertBtn = document.getElementById("convertBtn");
const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const result = document.getElementById("result");


const exchangeRates = {
  USD: 1,
  INR: 83,
  EUR: 0.92,
  GBP: 0.79
};

convertBtn.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (isNaN(amount) || amount <= 0) {
    result.textContent = "Please enter a valid amount.";
    return;
  }

  
  const amountInUSD = amount / exchangeRates[from];
  const convertedAmount = amountInUSD * exchangeRates[to];

  result.textContent = `Result: ${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
});