var year = new Date().getFullYear();

document.getElementById('year').innerHTML = year;

var lastMod = document.lastModified;

document.getElementById('lastModified').innerHTML = 'Last Modified: ' + lastMod;