const homeUrl = 'https://graydenrice.github.io/wdd230/chamber/';
const membersURL = 'data/members.json';

async function getData() {
    const response = await fetch(membersURL);
    const data = await response.json();
    displayMembers(data.members);

    console.log(data.members);
}

getData();

const displayMembers = (members) => {
    const directory = document.querySelector('#directory');
    members.forEach(name => {
        
        let memberCard = document.createElement('div');
        let name1 = document.createElement('h1');
        let address1 = document.createElement('p');
        let phone1 = document.createElement('p');
        let webUrl = document.createElement('a');
        let logo = document.createElement('img');
        let membership1 = document.createElement('p');

        name1.textContent = `${name.name}`;
        address1.innerHTML = name.address;
        phone1.textContent = name.phone;
        webUrl.innerHTML = name.website;
        webUrl.setAttribute('href', name.website);
        membership1.textContent = name.membership;
        logo.setAttribute('src', name.logo);
        logo.setAttribute('alt', 'company logo');
        logo.setAttribute('width', '470');
        logo.setAttribute('height', '177');

        memberCard.appendChild(logo);
        memberCard.appendChild(name1);
        memberCard.appendChild(address1);
        memberCard.appendChild(phone1);
        memberCard.appendChild(webUrl);
        memberCard.appendChild(membership1);
        directory.appendChild(memberCard);

        });

    
};

const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const directory = document.querySelector('#directory')

gridButton.addEventListener("click", () => {
    directory.classList.add('grid');
    directory.classList.remove('list');
});

listButton.addEventListener("click", () => {
    directory.classList.add('list');
    directory.classList.remove('grid');
});