const pass1 = document.getElementById('pass');
const pass2 = document.getElementById('passw2');
const message = document.getElementById('message');

pass2.addEventListener("focusout", checkSame);

function checkSame() {
    if (pass1.value !== pass2.value) {
        message.textContent = "Passwords Do Not Match!";
        message.style.visibility = 'visible';
        pass2.style.backgroundcolor = "white";
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
