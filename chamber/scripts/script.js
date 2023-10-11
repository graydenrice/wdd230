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

const firstVisit = localStorage.getItem('lastVisit');
const today = Date.now();
const visitElement = document.getElementById('visits');

if (!firstVisit) {
    localStorage.setItem('lastVisit', today);
    visitElement.textContent = 'Welcome, Let us know if you need anything';
} else {
    const sinceLast = today - firstVisit;
    const daysSince = Math.floor(sinceLast / (1000 * 60 * 60 * 24));

    if (daysSince < 1) {
        visitElement.textContent = 'Back so soon, Awesome!';
    } else {
        const word = (daysSince === 1) ? 'day' : 'days';
        visitElement.textContent = `It has been ${daysSince} ${word} since your last visit`;
    }

    localStorage.setItem('lastVisit', today);
}

var date = new Date.now();

document.getElementById('timest').innerHTML = date;


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
