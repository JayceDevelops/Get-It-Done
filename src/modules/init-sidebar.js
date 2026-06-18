import Logo from '../assets/Logo.svg';
import Today from '../assets/Today.svg'
import Upcoming from '../assets/Upcoming.svg';
import Anytime from '../assets/Anytime.svg';
import Someday from '../assets/Someday.svg';
import { loadCustomCategories } from './load-custom-category';
import { ChangeCategory } from "../modules/change-category";
import { AddCustomCategory } from "../modules/add-custom-category";
import { AddNewTask } from "../modules/add-new-task";


export const InitSidebar = () => {
    const nav = document.querySelector('nav');
    nav.innerHTML = '';
    renderHeading(nav);

    // Render New Task Button
    const newTask = document.createElement('button');
    newTask.classList.add('new');
    newTask.textContent = '+ New Task';

    newTask.addEventListener("click", () => {
        AddNewTask();
    });
    
    nav.appendChild(newTask);

    

    // Render Preset Categories
    renderPresetCategories(nav);

    // Render Custom Categories
    renderCustomCategories(nav);

    const Today = document.querySelector('.Today');
    Today.addEventListener("click", () => {
        ChangeCategory('Today');
    });

    const Upcoming = document.querySelector('.Upcoming');
    Upcoming.addEventListener("click", () => {
        ChangeCategory('Upcoming');
    });

    const Anytime = document.querySelector('.Anytime');
    Anytime.addEventListener("click", () => {
        ChangeCategory('Anytime');
    });

    const Someday = document.querySelector('.Someday');
    Someday.addEventListener("click", () => {
        ChangeCategory('Someday');
    });

    const newCustom = document.querySelector('.newCustom');
    newCustom.addEventListener("click", () => {
        AddCustomCategory();
    });

    
};

const renderHeading = (nav) => {
    // Render Heading Div
    const heading = document.createElement('div');
    heading.classList.add('heading');
    
    // Render Image 
    const Icon = document.createElement('img');
    Icon.src = Logo;
    heading.appendChild(Icon);

    // Render Text
    heading.innerHTML += '<h1>Get It Done</h1>';

    nav.appendChild(heading);
};

const renderPresetCategories = (nav) => {
    const preset = document.createElement('div');
    preset.classList.add('preset');
    preset.innerHTML += '<h1 class="list">Preset</h1>';

    // Goes through array of preset categories and creates the necessary divs and elements
    const PresetCategories = ['Today', 'Upcoming', 'Anytime', 'Someday'];
    PresetCategories.forEach((category) => {
        const presetButton = document.createElement('div');
        presetButton.classList.add('categoryButton', category);

        const name = document.createElement('div');
        name.classList.add('categoryname');

        const buttonImage = document.createElement('img');
        const nameText = document.createElement('h1');
        nameText.textContent = category;
        name.appendChild(nameText);

        presetButton.appendChild(name);

        if (category === 'Today'){
            buttonImage.src = Today;
            presetButton.classList.add('current');

            const active = document.createElement('div');
            active.classList.add('active');
            active.innerHTML = '<h1>Current</h1>';

            presetButton.appendChild(active);
        }
        else if (category === 'Upcoming'){
            buttonImage.src = Upcoming;
        }
        else if (category === 'Anytime'){
            buttonImage.src = Anytime;
        }
        else {
            buttonImage.src = Someday;
        }

        name.insertBefore(buttonImage, nameText);

        preset.appendChild(presetButton);
    });
    nav.appendChild(preset);
}

const renderCustomCategories = (nav) => {
    const custom = document.createElement('div');
    custom.classList.add('custom');

    const customHeader = document.createElement('div');
    customHeader.classList.add('customHeader');

    const headerText = document.createElement('h1');
    headerText.classList.add('list');
    headerText.textContent = 'Custom';
    customHeader.appendChild(headerText);

    const styleDiv = document.createElement('div');

    const newCustButton = document.createElement('button');
    newCustButton.classList.add('newCustom');
    newCustButton.textContent = "+";

    styleDiv.appendChild(newCustButton);

    customHeader.appendChild(styleDiv);
    custom.appendChild(customHeader);
    nav.appendChild(custom);

    loadCustomCategories();
};
