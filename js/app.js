
function getPin() {
    const pin = generatePin()
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        console.log('3 digit pin not allowed', pin);
        return getPin()
    }
}

function generatePin() {
    const randomPin = Math.round(Math.random() * 10000);
    return randomPin;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    console.log(pin);
    const disPlayPin = document.getElementById('display-pin');
    const displayPinText = disPlayPin.value;
    disPlayPin.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const numberField = document.getElementById('typed-number-field');
    const previousTypedNumber = numberField.value;
    if (isNaN(number)) {
        if (number === "C") {
            numberField.value = '';
        }
        else if (number === "<") {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            numberField.value = remainingDigits;
        }
    }
    else {

        const currentTypedNumber = previousTypedNumber + number;
        numberField.value = currentTypedNumber;
    }
})

document.getElementById('varify-pin').addEventListener('click', function(){
    const disPlayPin = document.getElementById('display-pin');
    const currentPin = disPlayPin.value; 

    const numberField = document.getElementById('typed-number-field');
    const typedNumber = numberField.value;

    const matchpin = document.getElementById('match');
    const notmatchpin = document.getElementById('not-match');
    if(currentPin === typedNumber){
        matchpin.style.display= 'block';
        notmatchpin.style.display= 'none';
    }
    else{
        notmatchpin.style.display= 'block';
        matchpin.style.display= 'none';
    }


})