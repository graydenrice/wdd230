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