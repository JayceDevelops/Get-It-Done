import  HomeIcon from "../assets/home.svg";
import WorkIcon from "../assets/work.svg";
import WeightsIcon from "../assets/weights.svg";
import VacationIcon from "../assets/vacation.svg";

import { InitSidebar } from "./init-sidebar";

let selectedIcon = HomeIcon;

let urgencyLevel = "noturgent";

export const RenderModal = (type) => {

    const modalBackground = document.createElement("div");
    modalBackground.classList.add('modalbackground');

    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalHeading = document.createElement('h1');
    const container = document.querySelector('.container');

    const body = document.querySelector('body');

    if (type === "task"){

        const taskDiv = document.createElement('div');
        taskDiv.classList.add('taskdiv');

        modalHeading.textContent = 'Add New Task';
        taskDiv.appendChild(modalHeading);

        const taskName = document.createElement('h2');
        taskName.textContent = "Task Name";
        taskDiv.appendChild(taskName);

        const taskNameInput = document.createElement('input');
        taskNameInput.id = "taskName";
        taskDiv.appendChild(taskNameInput);

        const listheading = document.createElement('h2');
        listheading.textContent = "Category";
        taskDiv.appendChild(listheading);

        const categories = getListOfCategories();
        const dropdown = document.createElement('select');
        dropdown.id = "categorydropdown";
        taskDiv.appendChild(dropdown);

        categories.forEach((category) => {
            const option = document.createElement('option');
            option.textContent = category;
            option.value = category;
            dropdown.appendChild(option);
        });

        const dueDateHeading = document.createElement('h2');
        dueDateHeading.textContent = "Due Date";
        taskDiv.appendChild(dueDateHeading);

        const date = document.createElement('input');
        date.type = 'datetime-local';
        date.id = 'date';
        taskDiv.appendChild(date);

        const urgencyLevels = document.createElement('div');
        urgencyLevels.classList.add('urgency');

        const notUrgent = document.createElement('div');
        notUrgent.classList.add('noturgent');
        urgencyLevels.appendChild(notUrgent);

        const slightUrgent = document.createElement('div');
        slightUrgent.classList.add('slighturgent');
        urgencyLevels.appendChild(slightUrgent);

        const urgent = document.createElement('div');
        urgent.classList.add('urgent');
        urgencyLevels.appendChild(urgent);

        taskDiv.appendChild(urgencyLevels);

        const taskButtons = document.createElement('div');
        taskButtons.classList.add('taskbuttons');

        const cancelTask = document.createElement('button');
        cancelTask.classList.add('canceltask');
        cancelTask.textContent = "Cancel";
        taskButtons.appendChild(cancelTask);

        const addTask = document.createElement('button');
        addTask.classList.add('addtask');
        addTask.textContent = "Add Task";
        taskButtons.appendChild(addTask);

        taskDiv.appendChild(taskButtons);
        modal.appendChild(taskDiv);

        createCancelEvent(modalBackground, cancelTask);
        createAddEvent(modalBackground, modal, addTask, "task");
        
        modalBackground.appendChild(modal);
        body.insertBefore(modalBackground, container);
    }
    else {

        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('categorydiv');

        // Heading
        modalHeading.textContent = 'Create New Category';
        categoryDiv.appendChild(modalHeading);

        // Input Heading and Text Box
        const inputDiv = document.createElement('div');

        const inputHeading = document.createElement('h2');
        inputHeading.textContent = 'Category Name';
        inputDiv.appendChild(inputHeading);

        const input = document.createElement('input');
        input.placeholder = 'work, home, fun, etc...';
        input.id = 'category';
        inputDiv.appendChild(input);

        categoryDiv.appendChild(inputDiv);

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
        

        categoryDiv.appendChild(iconDiv);
        
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

        categoryDiv.appendChild(buttonDiv);
        modal.appendChild(categoryDiv);

        createCancelEvent(modalBackground, cancelButton);
        createAddEvent(modalBackground, modal, addButton, "category");

        modalBackground.appendChild(modal);
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

const createAddEvent = (container, modal, add, type) => {

    if (type === "category"){
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

            modal.remove()
        });
    }
    else {
        add.addEventListener("click", () => {
            let tasks = localStorage.getItem('Tasks');
            tasks = JSON.parse(tasks);

            const taskName = document.querySelector("#taskName").value;

            const dropdown = document.querySelector('#categorydropdown');
            const dropdownvalue = dropdown.options[dropdown.selectedIndex].text;

            const duedate = document.querySelector('#date').value;

            const task = {
                id: crypto.randomUUID(),
                name: taskName,
                category: dropdownvalue,
                duedate: duedate,
                urgency: urgencyLevel
            }

            tasks.push(task);

            tasks = JSON.stringify(tasks);
            localStorage.setItem('Tasks', tasks);

            focusBackground(container);
            modal.remove();
        });
    };
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

const getListOfCategories = () => {
    let lists = ['Anytime', 'Someday'];

    let CustomCategories = localStorage.getItem('Custom');

    if (CustomCategories !== null){
        CustomCategories = JSON.parse(CustomCategories);

        CustomCategories.forEach(category => {
            lists.push(category.name);
        });
    }
    
    return lists;
}