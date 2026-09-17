const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    const task = inputBox.value.trim();
    if(!task){
        alert('Debes escribir algo!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = task;
    listContainer.appendChild(li);
    inputBox.value='';
    let span = document.createElement('span');
    span.textContent = '\u00d7';
    li.appendChild(span);
    saveData();
}
listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    } 
    else if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
});
function saveData() {
    localStorage.setItem("dataTareas", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("dataTareas") || "";
}

showTask();