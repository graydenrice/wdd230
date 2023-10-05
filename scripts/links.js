const baseURL = 'https://graydenrice.github.io/wdd230/';
const linksURL = 'https://graydenrice.github.io/wdd230/data/links.json';
const act = document.querySelector('#card');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);

    console.log(data.weeks);
}

getLinks();

const displayLinks = (weeks) => {
    let holder = document.querySelector('#links');
    weeks.forEach(week => {
        
        let termWeek = document.createElement('li');

        termWeek.textContent = `${week.week}: `;

        holder.appendChild(termWeek);

        week.links.forEach(link => {
        let url = document.createElement('a');

        url.setAttribute('href', link.url);
        url.textContent = `${link.title} | `;

        
        termWeek.appendChild(url);
        });
        
        act.appendChild(holder);
    });
}