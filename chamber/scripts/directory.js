const homeURL = 'https://graydenrice.github.io/wdd230/chamber/directory';
const membersURL = 'https://graydenrice.github.io/wdd230/chamber/members.json';

async function getData() {
    const response = await fetch(membersURL);
    const data = await response.json();
    displayMembers(data.members);

    console.log(data.members);
}

getData();

const displayMembers = (members) => {
    const directory = document.querySelector('#directory');
    members.forEach(member => {
        
        let memberCard = document.createElement('section');
        let name = document.createElement('h1');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let webUrl = document.createElement('a');
        let logo = document.createElement('img');
        let membership = document.createElement('p');

        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        webUrl.setAttribute('href', member.website);
        membership.textContent = member.membership;

        memberCard.appendChild(name);
        memberCard.appendChild(address);
        memberCard.appendChild(phone);
        memberCard.appendChild(webUrl);
        memberCard.appendChild(membership);
        directory.appendChild(memberCard);

        });

    
};