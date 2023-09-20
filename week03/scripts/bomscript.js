const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () =>{
    if (input.value != '') {
    displayList(input.value);
    chapterArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
    }
});

let chapterArray = getChaptersList() || [];

chapterArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    let listEl = document.createElement('li');
    let delButton = document.createElement('button');
    listEl.textContent = item;
    delButton.textContent = 'X';
    listEl.append(delButton);
    list.append(listEl);
    delButton.addEventListener('click', () =>{
        list.removeChild(listEl)
        deleteChapter(li.textContent);
        input.focus
    });
}

function setChapterList() {
   localStorage.setItem('favoriteChapter', JSON.stringify(chapterArray));
}

function getChaptersList() {
    return JSON.parse(localStorage.getItem('favortieChapter'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chapterArray = chapterArray.filter((item) => item !== chapter);
    setChapterList();
}