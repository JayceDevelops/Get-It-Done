import "./style.css";
import { InitSidebar } from "./modules/init-sidebar";
import { ChangeCategorie } from "./modules/change-categorie";


InitSidebar();


const Today = document.querySelector('.Today');
Today.addEventListener("click", () => {
    ChangeCategorie('Today');
});

const Upcoming = document.querySelector('.Upcoming');
Upcoming.addEventListener("click", () => {
    ChangeCategorie('Upcoming');
});

const Anytime = document.querySelector('.Anytime');
Anytime.addEventListener("click", () => {
    ChangeCategorie('Anytime');
});

const Someday = document.querySelector('.Someday');
Someday.addEventListener("click", () => {
    ChangeCategorie('Someday');
});