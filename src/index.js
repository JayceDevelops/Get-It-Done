import "./style.css";
import { InitSidebar } from "./modules/init-sidebar";
import { ChangeCategory } from "./modules/change-category";


InitSidebar();


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

