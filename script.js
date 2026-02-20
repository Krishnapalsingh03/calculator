let currentInput = "0";

const displayElement = document.getElementById('display');

function updateDisplay() {
    displayElement.innerText = currentInput;
}

function appendNumber(number) {
    if (currentInput === "0" && number !== ".") {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(op) {
    const lastChar = currentInput.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + op;
    } else {
        currentInput += op;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = "0";
    updateDisplay();
}

function calculate() {
    try {
        // Using eval for basic arithmetic; in production, use a math library for safety
        currentInput = eval(currentInput).toString();
    } catch {
        currentInput = "Error";
    }
    updateDisplay();
}

// Bonus: Keyboard Support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (/[0-9]/.test(key)) appendNumber(key);
    if (['+', '-', '*', '/'].includes(key)) appendOperator(key);
    if (key === 'Enter' || key === '=') calculate();
    if (key === 'Escape') clearDisplay();
    if (key === 'Backspace') {
        currentInput = currentInput.length > 1 ? currentInput.slice(0, -1) : "0";
        updateDisplay();
    }
});