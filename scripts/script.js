const button = document.querySelector('#menu')
const nav = document.querySelector('.navigate')

button.addEventListener('click', () => {
    nav.classList.toggle('open');
    button.classList.toggle('open');
});

const modeButton = document.querySelector('#mode');
const main = document.querySelector('main');

modeButton.addEventListener('click', () => {
    if (modeButton.textContent.includes('☑️')) {
        main.style.background = "#000";
        main.style.color = "#fff";
        modeButton.textContent = '❎';
    } else {
        main.style.background = '#eee';
        main.style.color = '#000';
        modeButton.textContent = '☑️'
    }
});

const displayVisits = document.querySelector('.visits');

let visits = Number(window.localStorage.getItem('numVisits')) || 0;

if (visits !== 0) {
    displayVisits.textContent = visits;
} else {
    displayVisits.textContent = 'This is you first visit!';
}

visits++;

localStorage.setItem('numVisits', visits);

const pass1 = document.getElementById('pass');
const pass2 = documnet.getElementById('passw2');
const message = document.getElementById('message')

pass2.addEventListener('focusout', checkSame);

function checkSame() {
    if (pass1 !== pass2.value) {
        message.textContent = "Passwords Do Not Match!";
        message.style.visibility = 'show';
        pass2.style.backgroundcolor = "white"
        pass2.value = '';
        pass2.focus();
    } else {
        message.style.display = 'none';
        pass2.style.backgroundcolor = 'white';
        pass2.style.color = 'black';
    }
}

const rvalue = document.getElementById("value");
const rate = document.getElementById("rate");

rate.addEventListener('change', displayValue);
rate.addEventListener('input', displayValue);

function displayValue() {
    rvalue.innerHTML = rate.value;
}
