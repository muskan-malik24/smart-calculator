
let display = document.getElementById("display");

// Number buttons
let buttons = document.querySelectorAll(".numberBtn");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        display.value += button.innerText;
    });
});

// Operator buttons
let operators = document.querySelectorAll(".operatorBtn");

operators.forEach(function(operator) {
    operator.addEventListener("click", function() {
        display.value += operator.innerText;
    });
});

// Decimal button
let decimalBtn = document.getElementById("decimalBtn");

decimalBtn.addEventListener("click", function() {
    display.value += ".";
});

// Equal button
let equalBtn = document.getElementById("equalBtn");

equalBtn.addEventListener("click", function() {
    let expression = display.value.trim();

    if (expression === "") {
        return;
    }

    // Allow only basic arithmetic characters
    if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
        display.value = "Error";
        return;
    }

    try {
        let result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        if (typeof result !== "number" || !Number.isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = String(result);
        }
    } catch (error) {
        display.value = "Error";
    }
});

// Clear button
let clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", function() {
    display.value = "";
});

// Backspace button
let backspaceBtn = document.getElementById("backspaceBtn");

backspaceBtn.addEventListener("click", function() {
    display.value = display.value.slice(0, -1);
});
