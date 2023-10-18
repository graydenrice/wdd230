
const membersURL = 'data/members.json';

async function getData() {
    const response = await fetch(membersURL);
    const data = await response.json();
    displaySpotlight1(data);
    displaySpotlight2(data);
}

getData();



function displaySpotlight1(data) {
    const spotLights = document.querySelector('#spotlight');

    let logo = document.createElement('img');

    logo.setAttribute('src', data.members[0].logo);
    logo.setAttribute('alt', 'company logo');
    logo.setAttribute('width', '470');
    logo.setAttribute('height', '177');

    spotLights.appendChild(logo);
}

function displaySpotlight2(data) {
    const spotLights = document.querySelector('#spotlight');

    let logo = document.createElement('img');

    logo.setAttribute('src', data.members[2].logo);
    logo.setAttribute('alt', 'company logo');
    logo.setAttribute('width', '470');
    logo.setAttribute('height', '177');

    spotLights.appendChild(logo);
}