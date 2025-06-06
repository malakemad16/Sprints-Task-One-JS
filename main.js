let firstNumber = document.querySelector("#first-number");
let secondNumber = document.querySelector("#second-number");
let result = document.querySelector(".result");
let equal = document.querySelector("#equal");

let operator = null;

document.querySelector("#add").addEventListener("click", () => operator = "+");
document.querySelector("#sub").addEventListener("click", () => operator = "-");
document.querySelector("#mult").addEventListener("click", () => operator = "*");
document.querySelector("#div").addEventListener("click", () => operator = "/");

equal.addEventListener("click", () => {
    const num1 = Number(firstNumber.value);
    const num2 = Number(secondNumber.value);
    let calcResult;

    switch (operator) {
        case "+":
            calcResult = num1 + num2;
            break;
        case "-":
            calcResult = num1 - num2;
            break;
        case "*":
            calcResult = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                calcResult = "Cannot divide by 0";
                break;
            }
            calcResult = num1 / num2;
            break;
        default:
            calcResult = "Please select an operation";
    }

    result.textContent = `Result: ${calcResult}`;
});
