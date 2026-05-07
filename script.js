const convertBtn = document.getElementById("convertBtn");
const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const result = document.getElementById("result");


const exchangeRates = {
  USD: 1,
  INR: 83,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 157,
  CNY: 7.2,
  AED: 3.67,
  SAR: 3.75,
  CAD: 1.37,
  AUD: 1.39,
  SGD: 1.27,
  RUB: 75,
  KRW:1370
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
