const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;
    list.innerHTML += html;
};

addForm.addEventListener('submit', e => {

    e.preventDefault();
    const todo = addForm.add.value.trim();

    if (todo.length) {
        generateTemplate(todo);
        addForm.reset(); // resets the field after it's submitted
    }
});

// delete todos
// adding eventListener to the trashcan icon using event delegation to prevent making our site slow so javascript doesn't have everytime we load the page load eventListener for the all trashcans there are

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) { // this will return true if we click on the trashcanicon because on the icon we added delete class
        e.target.parentElement.remove(); // here we add function remove to parent element which is the "li" tag of the "i" trashcan icon
    }
});

const filterTodos = (term) => {

    Array.from(list.children)
    .filter((todo) => !todo.textContent.includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered')); // here we made that if the user deletes a letter from the word class gets deleted from the li tag which was previously given to him
};

// keyup event
    search.addEventListener('keyup', () => {

        const term = search.value.trim().toLowerCase();
        filterTodos(term);

    });
