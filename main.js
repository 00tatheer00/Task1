let output = document.getElementById("output");

function appendToOutput(value) {
  output.innerText += value;
}

function clearOutput() {
  output.innerText = "";
}

function openParenthesis() {
  appendToOutput("(");
}

function closeParenthesis() {
  appendToOutput(")");
}

function calculateResult() {
  try {
    output.innerText = eval(output.innerText);
  } catch (error) {
    output.innerText = "Error";
  }
}
