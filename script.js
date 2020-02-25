function add(...args){
    return args.reduce((a, b) => a + b);
}

function sub(...args){
    return args.reduce((a, b) => a - b);
}

function div(...args){
    return args.reduce((a, b) => a / b);
}

function mul(...args){
    return args.reduce((a, b) => a * b);
}


function operate(operator,...args){
    return operator(...args);
}

const display = document.querySelector('#display');
const numButtons = document.querySelectorAll('.numbers')
const displayValue = document.createElement('p');

numButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        displayValue.textContent += button.textContent;
        display.appendChild(displayValue);
    });
});


