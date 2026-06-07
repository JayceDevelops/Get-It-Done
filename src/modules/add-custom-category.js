export const AddCustomCategory  = () => {
    renderModal();
};

const renderModal = () => {
    
    // Gives background unfocused look
    const container = document.querySelector('.container');
    container.style.opacity = '20%';
    container.style.pointerEvents = 'none';

    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalHeading = document.createElement('h1');
    modalHeading.textContent = 'Create New Category';
    modal.appendChild(modalHeading);

    const inputDiv = document.createElement('div');

    const inputHeading = document.createElement('h2');
    inputHeading.textContent = 'Category Name';
    inputDiv.appendChild(inputHeading);

    const input = document.createElement('input');
    input.placeholder = 'work, home, fun, etc...';
    inputDiv.appendChild(input);

    modal.appendChild(inputDiv);
    

    const body = document.querySelector('body');

    body.insertBefore(modal, container);
};