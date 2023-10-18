const curTemp = document.querySelector('#temp');
const icon = document.querySelector('#w-icon');
const caption = document.querySelector('figcaption');
const weather = document.querySelector('#weather');
const monday = document.querySelector('#mon');
const tuesday = document.querySelector('#tues');
const wednesday = document.querySelector('#wed');

let url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.117&lon=-112.08&units=imperial&appid=643adec8f9a91073b6b9137ce6f36dfb';

async function fetchWeather() {
    try{
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
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


let url2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=41.117&lon=-112.08&units=imperial&appid=643adec8f9a91073b6b9137ce6f36dfb';

async function fetchDaily() {
    try{
        const response = await fetch(url2);
        if(response.ok) {
            const data2 = await response.json();
            displayDaily(data2);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

fetchDaily();

function displayDaily(data2) {
    var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    let day1 = new Date(data2.list[2].dt * 1000);
    let dayString1 = weekdays[day1.getDay()];
    let one = data2.list[2].main.temp;
    monday.innerHTML = `${dayString1} - ${Math.round(one)}&deg;F | `;

    let day2 = new Date(data2.list[3].dt * 4000);
    let dayString2 = weekdays[day2.getDay()];
    let two = data2.list[3].main.temp;
    tuesday.innerHTML = `${dayString2} - ${Math.round(two)}&deg;F | `;

    let day3 = new Date(data2.list[4].dt * 5000);
    let dayString3 = weekdays[day3.getDay()];
    let three = data2.list[4].main.temp;
    wednesday.innerHTML = `${dayString3} - ${Math.round(three)}&deg;F`;
}