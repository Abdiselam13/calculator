//variables
const allNumbers = document.querySelectorAll('.number');
const symbols = document.querySelectorAll('.symbol');
const equalbutton = document.querySelector('.equal');
const cButton = document.querySelector('.equal');
const ceButton = document.querySelector('.equal');

const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');
const display3 = document.querySelector('.display-3');

let sign = '';
let rusult = null;
let outputOne = '';
let outputTwo = '';
let dot = false;

allNumbers.forEach(Number =>{
    Number.addEventListener('click', showNumber)
})

//show number
function showNumber(e){
    if(e.target.innerText === '.' && !dot){
        dot =true
    }else if(e.target.innerText === '.' && dot){
        return
    }
  outputTwo = outputTwo +  e.target.innerText;
  display2.innerText = outputTwo
}

//Display result on the screen
symbols.forEach(Symbol => {
    Symbol.addEventListener('click', showResult)
})


//show result
 function showResult(e){
    if(!outputTwo) result;
    dot = false;
    const signName = e.target.innerText;
    if(outputOne && outputTwo && sign){
         ckeckCalulation();
    } else{
        result = parseFloat(outputTwo);
    }
    clearMainDisplay(signName);
    sign = signName;
 }
//check calculation
function ckeckCalulation(){
    if(sign === 'X'){
        result = parseFloat(result) * parseFloat(outputTwo);
    }
     else if(sign === '+'){
        result = parseFloat(result) + parseFloat(outputTwo);
    }
   else if(sign === '-'){
        result = parseFloat(result) - parseFloat(outputTwo);
    }
    else if(sign === '/'){
        result = parseFloat(result) / parseFloat(outputTwo);
    }
    else if(sign === '%'){
        result = parseFloat(result) % parseFloat(outputTwo);
    }
}

//clear display
function clearMainDisplay(name = ''){
    outputOne += outputTwo + ' ' + name + ' ';
    display1.innerText = outputOne;
    display2.innerText = ' ';
    display3.innerText = result;
    outputTwo = '';
}

equalbutton.addEventListener('click', calculate);

function calculate(){
   if(!outputOne || !outputOne){
    return;
   }else{
    ckeckCalulation();
    clearMainDisplay();
    display2.innerText =result;
    outputTwo = result;
    display3.innerText = '';
    outputOne = '';
   }
}

cButton.addEventListener('click',deleteAll);
ceButton.addEventListener('click',deleteLastInput);

function deleteAll(){
    display1.innerText = '0';
    display2.innerText = '0';
    display3.innerText = '0';
    outputOne = ''
    outputTwo = ''
    result = '';
    
}

function deleteLastInput(){
    display2.innerText = '';
    outputTwo.innerText = '';
}