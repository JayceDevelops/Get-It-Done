import { UpdateCategoryHeading } from "./update-category-heading";

export const InitMain = (category='') => {

    let tasks = localStorage.getItem('Tasks');
    tasks = JSON.parse(tasks);
    let filteredTasks = [];

    if (tasks !== null){
        if (category !== ''){

            tasks.forEach(task => {
                if (task.category === category){
                    filteredTasks.push(task);
                }
            });

            loadTasks(filteredTasks);
        }
        else {
            const today = new Date().toISOString();
            tasks.forEach(task => {

                if (today.slice(0, 10) === task.duedate.toString().slice(0, 10)){
                    filteredTasks.push(task);
                }
            });

            loadTasks(filteredTasks);
            UpdateCategoryHeading("Today");
        }
    }
    else {
        tasks = [];
        localStorage.setItem('Tasks', JSON.stringify(tasks));
    }
};

const loadTasks = (filTasks) => {

    const tasksHolder = document.querySelector('.tasks');
    tasksHolder.replaceChildren();

    if (filTasks.length !== 0){
        filTasks.forEach((task) => {

            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task');

            const content = document.createElement('div');
            content.classList.add('content');

            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.name = task.id;
            checkbox.value = task.name;
            content.appendChild(checkbox);

            const taskHeading = document.createElement('h1');
            taskHeading.textContent = task.name;
            content.appendChild(taskHeading);

            const taskCategory = document.createElement('h2');
            taskCategory.textContent = '(' + task.category + ')';
            content.appendChild(taskCategory);

            taskDiv.appendChild(content);

            const urgency = document.createElement('div');
            urgency.classList.add('urgency');

            const color = document.createElement('div');
            color.classList.add('color');

            if (task.urgency === "noturgent"){
                color.style.backgroundColor = 'var(--not-urgent)';
            }
            else if (task.urgency === "slighturgent"){
                color.style.backgroundColor = 'var(--slight-urgent)';
            }
            else {
                color.style.backgroundColor = 'var(--urgent)';
            }

            urgency.appendChild(color);

            taskDiv.appendChild(urgency);

            tasksHolder.appendChild(taskDiv);
        });
    }
    else {
        const noTasks = document.createElement('h2');
        noTasks.textContent = "Nothing to see here...";
        tasksDiv.appendChild(noTasks);
    }
};