const todoForm = document.getElementById('todo-form'); 
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newTask = todoInput.value.trim();
  
    if (newTask === '') {
        alert('Et kirjoittanut mitään?'); //Herja, jos kenttään ei kirjoita mitään
        return;
    }
  
    addTask(newTask); // Lisää uusi tehtävä
    todoInput.value = ''; // Tyhjennä täyttöruutu
});

function addTask(task) {
    const listItem = document.createElement('li'); // luo listaelementin
    const taskText = document.createElement('span'); 
    taskText.textContent = task;
    listItem.appendChild(taskText);
  
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');  //Lisätään check-box
    listItem.appendChild(checkBox);
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Poista';
    deleteButton.classList.add('deleteButton'); // Lisätään poista-nappi
    listItem.appendChild(deleteButton);

    const editButton = document.createElement('button');
    editButton.textContent = 'Muokkaa';
    editButton.classList.add('editButton'); // Lisätään muokkaa-nappi
    listItem.appendChild(editButton);
  
    todoList.appendChild(listItem);
  
    // Tapahtumankuuntelijat
    checkBox.addEventListener('change', function() {
        if (this.checked) {
            taskText.style.textDecoration = 'line-through'; //yliviivaa tehdyn tehtävän
        } else {
            taskText.style.textDecoration = 'none';
        }
    });

    deleteButton.addEventListener('click', function() {
        todoList.removeChild(listItem); // klikkaus poistaa listaelementin
    });

    editButton.addEventListener('click', function() { // Muokkaa napin painallus antaa laatikon, jossa tietoja voi muokkaa
        const newTaskText = prompt('Muokkaa tehtävää:', taskText.textContent);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            taskText.textContent = newTaskText.trim();
        }
    });
}