import { ChangeCategory } from "./change-category";

const RemoveShownCategories = () => {
    const shown = document.querySelectorAll('.custom > .categoryButton');
    shown.forEach((category) => {
        category.remove();
    });
};

export const loadCustomCategories = () => {
    
    RemoveShownCategories();

    let CustomCategories = localStorage.getItem('Custom');

    if (CustomCategories !== null) {
        CustomCategories = JSON.parse(CustomCategories);

        const custom = document.querySelector('.custom');
        CustomCategories.forEach(category => {
            const buttonDiv = document.createElement('div');
            buttonDiv.classList.add("categoryButton", category.name);
            
            const name = document.createElement('div');
            name.classList.add('categoryname');

            name.innerHTML = `<h1>${category.name}</h1>`;
            buttonDiv.appendChild(name);

            buttonDiv.addEventListener("click", () => {
                ChangeCategory(category.name);
            });

            custom.appendChild(buttonDiv);
        });
    }
    else {
        CustomCategories = [];
        localStorage.setItem('Custom', JSON.stringify(CustomCategories));
    }
};
