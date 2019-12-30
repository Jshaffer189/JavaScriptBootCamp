// using classList methods

const todo = document.querySelector('#todos .todo');

// todo.style.color = 'red';
// todo.style.textDecoration = 'line-through';
// todo.style.opacity = '50%';

// setAttribute takes current classes and replaces a new list of classes
todo.setAttribute('class', 'todo done');

// remove(class) classlist from selector,
todo.classList.remove('done');

// toggles adding and removing
// same as:  todo.getAttribute('class').includes('done')
todo.classList.toggle('done');

// adds class
todo.classList.add('done');
