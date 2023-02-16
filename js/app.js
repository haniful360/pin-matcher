
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

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();
    console.log(pin);
    const disPlayPin = document.getElementById('display-pin');
    const displayPinText = disPlayPin.value;
    disPlayPin.value = pin;
})