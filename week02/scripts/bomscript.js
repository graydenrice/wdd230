const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () =>{
    if (input.value != '') {}
    const listEl = document.createElement('li');
    const delButton = document.createElement('button');
    listEl.textContent = input.value;
    delButton.textContent = 'X';
    listEl.append(delButton);
    list.append(listEl);
    delButton.addEventListener('click', () =>{
        list.removeChild(listEl)
        input.focus();
        input.value = '';
    });

});