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