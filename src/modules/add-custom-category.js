import { loadCustomCategories } from "./load-custom-category";

export const AddCustomCategory  = () => {
    renderModal();
};

const renderModal = () => {
    const container = document.querySelector('.container');
    unFocusBackground(container);

    const modal = document.createElement('div');
    modal.classList.add('modal');

    // Heading
    const modalHeading = document.createElement('h1');
    modalHeading.textContent = 'Create New Category';
    modal.appendChild(modalHeading);

    // Input Heading and Text Box
    const inputDiv = document.createElement('div');

    const inputHeading = document.createElement('h2');
    inputHeading.textContent = 'Category Name';
    inputDiv.appendChild(inputHeading);

    const input = document.createElement('input');
    input.placeholder = 'work, home, fun, etc...';
    input.id = 'category';
    inputDiv.appendChild(input);

    modal.appendChild(inputDiv);
    
    // Cancel and Add Button
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('modalbuttons');

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('cancel');
    cancelButton.textContent = 'Cancel';
    buttonDiv.appendChild(cancelButton);

    const addButton = document.createElement('button');
    addButton.classList.add('add');
    addButton.textContent = 'Add Category';
    buttonDiv.appendChild(addButton);

    modal.appendChild(buttonDiv);

    createCancelEvent(container, cancelButton, modal);
    createAddEvent(container, modal, addButton);

    const body = document.querySelector('body');

    body.insertBefore(modal, container);
};

const unFocusBackground = (container) => {
    container.style.opacity = '20%';
    container.style.pointerEvents = 'none';
};

const focusBackground = (container) => {
    container.style.opacity = '100%';
    container.style.pointerEvents = 'auto';
};

const createCancelEvent = (container, cancel, modal) => {
    cancel.addEventListener("click", () => {
        focusBackground(container);
        modal.remove();
    });
}

const createAddEvent = (container, modal, add) => {

    add.addEventListener("click", () => {
        focusBackground(container);
        
        let CustomCategories = localStorage.getItem('Custom');
        CustomCategories = JSON.parse(CustomCategories);

        const input = document.querySelector('#category').value;
        const category = {
            name: input,
            task: []
        };

        CustomCategories.push(category);

        CustomCategories = JSON.stringify(CustomCategories);
        localStorage.setItem('Custom', CustomCategories);

        loadCustomCategories();

        modal.remove();
    });
}; 