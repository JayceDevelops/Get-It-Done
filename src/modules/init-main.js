export const InitMain = (category='') => {

    let tasks = localStorage.getItem('Tasks');

    if (tasks !== null){

    }
    else {
        tasks = [];
        localStorage.setItem('Tasks', JSON.stringify(tasks));
    }
};