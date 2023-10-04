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
const pass2 = document.getElementById('passw2');
const message = document.getElementById('message')

// pass2.addEventListener('focusout', checkSame);

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

// rate.addEventListener('change', displayValue);
// rate.addEventListener('input', displayValue);

function displayValue() {
    rvalue.innerHTML = rate.value;
}

const curTemp = document.querySelector('#temp');
const icon = document.querySelector('#w-icon');
const caption = document.querySelector('figcaption');
const weather = document.querySelector('#weather');

let url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.117&lon=-112.08&units=imperial&appid=643adec8f9a91073b6b9137ce6f36dfb';

async function fetchWeather() {
    try{
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

fetchWeather();

function displayWeather(data) {
    let round  = data.main.temp;
    curTemp.innerHTML = `${Math.round(round)}&deg;F - `;
    const iconSource = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let description = data.weather[0].description;
    icon.setAttribute('src', iconSource);
    icon.setAttribute('alt', 'Weather Icon');
    caption.textContent = description;
}
