import  HomeIcon from "../assets/home.svg";
import WorkIcon from "../assets/work.svg";
import WeightsIcon from "../assets/weights.svg";
import VacationIcon from "../assets/vacation.svg";

import { InitSidebar } from "./init-sidebar";

let selectedIcon = HomeIcon;

export const RenderModal = (type) => {

    const modalBackground = document.createElement("div");
    modalBackground.classList.add('modalbackground');

    const modal = document.createElement('div');
    modal.classList.add('modal');

    if (type === "task"){

    }
    else {
        const container = document.querySelector('.container');

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
        home.classList.add('home', 'icon', 'selected');
        home.src = HomeIcon;
        iconDiv.appendChild(home)

        home.addEventListener("click", () => {
            selectedIcon = HomeIcon;
            updateImageSelectedBorder();
        });

        const work = document.createElement('img');
        work.classList.add('work', 'icon');
        work.src = WorkIcon;
        iconDiv.appendChild(work);

        work.addEventListener("click", () => {
            selectedIcon = WorkIcon;
            updateImageSelectedBorder();
        });

        const weights = document.createElement('img');
        weights.classList.add('weights', 'icon');
        weights.src = WeightsIcon;
        iconDiv.appendChild(weights);

        weights.addEventListener("click", () => {
            selectedIcon = WeightsIcon;
            updateImageSelectedBorder();
        });

        const vacation = document.createElement('img');
        vacation.classList.add('vacation', 'icon');
        vacation.src = VacationIcon;
        iconDiv.appendChild(vacation);

        vacation.addEventListener("click", () => {
            selectedIcon = VacationIcon;
            updateImageSelectedBorder();
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

        createCancelEvent(modalBackground, cancelButton);
        createAddEvent(modalBackground, modal, addButton);

        modalBackground.appendChild(modal);

        const body = document.querySelector('body');

        body.insertBefore(modalBackground, container);

        updateImageSelectedBorder();
    };
};

const unFocusBackground = (container) => {
    container.style.backdropFilter = "blur(10px)";
};

const focusBackground = (container) => {
    container.remove();
};

const createCancelEvent = (container, cancel) => {
    cancel.addEventListener("click", () => {
        focusBackground(container);
        container.remove();
    });
};

const createAddEvent = (container, modal, add) => {

    add.addEventListener("click", () => {
        
        
        let CustomCategories = localStorage.getItem('Custom');
        CustomCategories = JSON.parse(CustomCategories);

        const input = document.querySelector('#category').value;
        console.log(input);
        const category = {
            id: crypto.randomUUID(),
            name: input,
            image: selectedIcon
        };

        CustomCategories.push(category);

        
        CustomCategories = JSON.stringify(CustomCategories);
        localStorage.setItem('Custom', CustomCategories);

        focusBackground(container);

        InitSidebar();

        modal.remove();
    });
};

const updateImageSelectedBorder = () => {
    const oldIcon = document.querySelector('.selected');
    oldIcon.classList.remove('selected');
    oldIcon.style.borderColor = 'var(--color-border)';

    let newIcon = '';

    if (selectedIcon === HomeIcon) {
        newIcon = document.querySelector('.home');
    }
    else if (selectedIcon === WeightsIcon) {
        newIcon = document.querySelector('.weights');
    }
    else if (selectedIcon === WorkIcon) {
        newIcon = document.querySelector('.work');
    }
    else {
        newIcon = document.querySelector('.vacation');
    }

    newIcon.style.borderColor = 'var(--accent-primary)';
    newIcon.classList.add('selected');
};