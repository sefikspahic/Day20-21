let buttons = document.querySelectorAll('.button');
let text = document.getElementById('text');
let backspace = document.getElementById('backspace');
let caps = document.getElementById('caps');
let enter = document.getElementById('enter');
let space = document.getElementById('space');
let shift = document.getElementById('shift');
let ok = document.getElementById('ok');
let isCapsOn = false;
let isShiftOn = false;

buttons.forEach((button) => {
    button.addEventListener('click', write);
    function write() {
        text.value = text.value +  button.innerHTML;
        if(isShiftOn) {
            buttons.forEach((button) => {
                button.innerHTML = button.innerHTML.toLowerCase();
            });
            isShiftOn = false; 
        }
    }
});

backspace.addEventListener('click', remove);
    function remove() {
        text.value = text.value.substring(0, text.value.length - 1);
    }

caps.addEventListener('click', capsLock);

function capsLock() {
    if(!isCapsOn) {
        buttons.forEach((button) => {
            button.innerHTML = button.innerHTML.toUpperCase();
        });
    } else {
        buttons.forEach((button) => {
            button.innerHTML = button.innerHTML.toLowerCase();
        });
    }
    isCapsOn = !isCapsOn;
}

enter.addEventListener('click', enterClick);

function enterClick() {
    text.value =  text.value + "\n";
}

space.addEventListener('click', spaceClick);

function spaceClick() {
    text.value =  text.value + " ";
}

shift.addEventListener('click', shiftClick);

function shiftClick() {
    buttons.forEach((button) => {
        button.innerHTML = button.innerHTML.toUpperCase();
    });
    isShiftOn = true;
}

ok.addEventListener('click', okClick);

function okClick() {
    alert(text.value);
}