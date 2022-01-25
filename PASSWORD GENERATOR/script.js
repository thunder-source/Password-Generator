const pwEL = document.getElementById("pw");
const copyEL = document.getElementById("copy");
const lenEL = document.getElementById("len");
const upperEL = document.getElementById("upper");
const lowerEL = document.getElementById("lower");
const numberEL = document.getElementById("number");
const symbolEL = document.getElementById("symbol");
const generateEL = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";

function getLowercase(){
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol(){
    return symbols[Math.floor(Math.random() * symbols.length)];
}



function generatePassword(){
    // console.log('working')
    const len = lenEL.value;

    let password = '';

    for(let i=0; i<len; i++){
        const x =generateX();
        password += x;
    }
    // console.log({password});
    pwEL.value = password;
}

function generateX() {
    const xs = [];
    if(upperEL.checked){
        xs.push(getUppercase());
    }

    if(lowerEL.checked){
        xs.push(getLowercase());
    }

    if(numberEL.checked){
        xs.push(getNumber());
    }

    if(symbolEL.checked){
        xs.push(getSymbol());
    }

    if(xs.length === 0){
      const invalid = function(invalid_input){
        document.getElementById('ayushexampleModal').click();
        }
        invalid()
        return ''
    }
    
    return xs[Math.floor(Math.random() * xs.length)];
}


generateEL.addEventListener('loadeddata', generatePassword);
generateEL.addEventListener('click', generatePassword);

window.onload = generatePassword



function copy() {
    /* Get the text field */
    var copyText = document.getElementById("pw");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }