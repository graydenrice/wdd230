const button = document.querySelector('#menu')
const nav = document.querySelector('.navigation')

button.addEventListener('click', () => {
    nav.classList.toggle('open');
    button.classList.toggle('open');
});

var lastMod = document.lastModified;
document.getElementById('lastModified').innerHTML = 'Last Modified: ' + lastMod;

const year = new Date().getFullYear();
document.getElementById('year').innerHTML = year;