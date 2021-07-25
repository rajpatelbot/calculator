let answerScreen = document.getElementById('answerScreen');
let currentInput = document.getElementById('currentInput');
let clr = document.getElementById('clr');
let back = document.getElementById('back');
let equal = document.getElementById('equal');
const btn = document.querySelectorAll('button');
var realTimeValue = '';

clr.addEventListener('click', () => {
    realTimeValue = '';
    answerScreen.innerHTML = '';
});

btn.forEach((button) => {
    button.addEventListener('click', () => {
        realTimeValue += button.value;
        currentInput.innerHTML = realTimeValue;
    })
});

back.addEventListener('click', () => {
    realTimeValue += back.value;
    val = realTimeValue.slice(0, -1);
    realTimeValue = val;
    currentInput.innerHTML = realTimeValue;
});

equal.addEventListener('click', () => {
    answerScreen.innerHTML = eval(realTimeValue);
});