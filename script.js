
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

function operate(...args){
    if(operator == 'add'){
        return add(...args)
    };
    if(operator == 'sub'){
       return sub(...args)
    };
    if(operator == 'div'){
        return div(...args)
     };
     if(operator == 'mul'){
        return mul(...args)
     };
    
}



const displayBox = document.querySelector('#display');
const numButtons = document.querySelectorAll('.numbers')
const displayedNumbers = document.createElement('p');
const oppButtons = document.querySelectorAll('.opperators')

let enteredValues = []
let pressedOpps = []
let displayValue = 0


numButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        
        if (displayValue == 0 || result == displayedNumbers.textContent){
            removeZero();
        }
       
        displayedNumbers.textContent += button.textContent;
        displayValue = displayedNumbers.textContent

    });

});


document.querySelector('#clear').addEventListener('click', (e) => {
    putZero();
    enteredValues = []
    displayValue = 0;
});


oppButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        enteredValues.push(displayValue)
        displayValue = 0
    });
});

function removeZero(){
    displayedNumbers.textContent = '';
}

function putZero(){
    displayedNumbers.textContent = 0;
}



let operator

document.querySelector('#add').addEventListener('click', (e) => {
    operator = 'add'
    });

document.querySelector('#sub').addEventListener('click', (e) => {
    operator = 'sub'
    });


document.querySelector('#div').addEventListener('click', (e) => {
    operator = 'div'
    });


document.querySelector('#mul').addEventListener('click', (e) => {
    operator = 'mul'
    });



let result
document.querySelector('#equals').addEventListener('click', (e) => {
    
    enteredValues.push(displayValue)
    displayedNumbers.textContent = operate(Number(enteredValues[0]), Number(enteredValues[1]));
    enteredValues = []
    displayValue = displayedNumbers.textContent
    result = displayedNumbers.textContent
});


displayedNumbers.textContent = displayValue

displayBox.appendChild(displayedNumbers);