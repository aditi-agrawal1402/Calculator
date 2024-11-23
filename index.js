let displayLeft = document.querySelector(".left");
let displayRight = document.querySelector(".right");
let number = document.querySelectorAll(".number");
let operator = document.querySelectorAll(".operator");
let equal = document.querySelector(".equal");
let allClear = document.querySelector(".clear"); 
let back = document.querySelector(".back");

let func = "";
let num1 = "";
let num2 = "";

function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

function assignNum(num) {
    if (func == "") {
        if(num == '00'){
            num1 *= 100;
        }
        else{
            num1 = (num1 * 10) + Number(num);
        }
    }
    else {
        if(num == '00'){
            num2 *= 100;
        }
        else{
            num2 = (num2 * 10) + Number(num);
        }
    }
}

function calculate() {
    clearDisplay();
    if (func == '+') {
        displayRight.textContent = add(num1, num2);
    }
    else if (func == '-') {
        displayRight.textContent = subtraction(num1, num2);
    }
    else if (func == '*') {
        displayRight.textContent = multiply(num1, num2);
    }
    else if (func == '%') {
        displayRight.textContent = division(num1, num2);
    }
    num1 = displayRight.textContent;
    num2 = "";
}

function displayNum(num) {
    displayRight.textContent = displayRight.textContent + num;
}

function displayOperator() {
    displayLeft.textContent = func;
}

function clearDisplay() {
    displayLeft.textContent = "";
    displayRight.textContent = "";
}

function backspace(){
    if(num2 != ""){
        num2 = Math.floor(num2/10);
        displayRight.textContent = num2;
    }
    else{
        num1 = Math.floor(num1/10);
        displayRight.textContent = num1;
    }
}

number.forEach(key => {
    key.addEventListener("click", (e) => {
        assignNum(e.target.textContent);
        if (func != "") {
            displayRight.textContent = "";
        }
        displayNum(e.target.textContent);
        console.log(e.target.textContent);
    });
});

operator.forEach(task => {
    task.addEventListener("click", (e) => {
        if(func != ""){
            calculate();
            num1 = displayRight.textContent;
            num2 = "";
        }
        func = e.target.textContent;
        displayOperator();
        console.log(e.target.textContent);
    })
})

equal.addEventListener("click", calculate);

allClear.addEventListener("click",()=>{
    num1 = "";
    num2 = "";
    func = "";
    clearDisplay();
})

back.addEventListener("click",backspace);
