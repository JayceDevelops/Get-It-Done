export const ChangeCategory = (category) => {
    const current = document.querySelector('.current');
    current.classList.remove('current');

    const active = document.querySelector('.active');
    active.remove();

    const newCurrent = document.querySelector(`.${category}`);
    newCurrent.classList.add('current');
    newCurrent.appendChild(active);
};