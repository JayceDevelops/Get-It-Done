import { loadCustomCategories } from "./load-custom-category";
import  HomeIcon from "../assets/home.svg";
import WorkIcon from "../assets/work.svg";
import WeightsIcon from "../assets/weights.svg";
import VacationIcon from "../assets/vacation.svg";
import { InitSidebar } from "./init-sidebar";

let selectedIcon = HomeIcon;

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

    // Icon Chooser
    const iconDiv = document.createElement('div');
    iconDiv.classList.add('IconDiv');

    const iconHeading = document.createElement('h2');
    iconHeading.textContent = 'Choose An Icon';
    iconDiv.appendChild(iconHeading);

    const home = document.createElement('img');
    home.classList.add('home', 'icon');
    home.src = HomeIcon;
    iconDiv.appendChild(home)

    home.addEventListener("click", () => {
        selectedIcon = HomeIcon;
    });

    const work = document.createElement('img');
    work.classList.add('work', 'icon');
    work.src = WorkIcon;
    iconDiv.appendChild(work);

    work.addEventListener("click", () => {
        selectedIcon = WorkIcon;
    });

    const weights = document.createElement('img');
    weights.classList.add('weights', 'icon');
    weights.src = WeightsIcon;
    iconDiv.appendChild(weights);

    weights.addEventListener("click", () => {
        selectedIcon = WeightsIcon;
    });

    const vacation = document.createElement('img');
    vacation.classList.add('vacation', 'icon');
    vacation.src = VacationIcon;
    iconDiv.appendChild(vacation);

    vacation.addEventListener("click", () => {
        selectedIcon = VacationIcon;
    });
    

    modal.appendChild(iconDiv);
    
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
            id: crypto.randomUUID(),
            name: input,
            image: selectedIcon
        };

        CustomCategories.push(category);

        CustomCategories = JSON.stringify(CustomCategories);
        localStorage.setItem('Custom', CustomCategories);

        InitSidebar();

        modal.remove();
    });
};