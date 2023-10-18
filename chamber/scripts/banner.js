const banner = document.querySelector('#banner');
const title = document.querySelector('#eventinfo');
const closeButton = document.querySelector('#close');

function deleteBanner() {
    let date = new Date();
    let currentDate = date.getDay();

    if(currentDate !== 1 && currentDate !== 2 && currentDate != 3) {
        banner.remove();
    }
}

closeButton.addEventListener('click', () => {
    banner.remove();
});