function calculatePercentage() {
  const percent = parseFloat(document.getElementById("percentInput").value);
  const number = parseFloat(document.getElementById("numberInput").value);
  const resultElement = document.getElementById("result");

  if (isNaN(percent) || isNaN(number)) {
    resultElement.textContent = "Please enter valid numbers.";
    return;
  }

  const result = (percent / 100) * number;
  resultElement.textContent = `${percent}% of ${number} is ${result}`;
}
