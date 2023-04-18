let result = document.getElementById('result');

function updateDisplay(value) {
  result.value += value;
}

function clearDisplay() {
  result.value = '';
}

function calculate() {
  let expression = result.value;
  result.value = eval(expression);
}
