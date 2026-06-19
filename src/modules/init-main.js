import { UpdateCategoryHeading } from "./update-category-heading";

export const InitMain = (category='') => {

    let tasks = localStorage.getItem('Tasks');
    tasks = JSON.parse(tasks);

    let filteredTasks = [];

    const today = new Date().toISOString();

    if (tasks !== null){
        if (category !== ''){

            if (category !== "Upcoming"){
                tasks.forEach(task => {
                    if (task.category === category){
                        filteredTasks.push(task);
                    }
                });

                loadTasks(filteredTasks, category);
            }
            else {
                loadTasks(filteredTasks, category);
                UpdateCategoryHeading("Upcoming");
            }   
        }
        else {
            
            tasks.forEach(task => {
                if (today.slice(0, 10) === task.duedate.toString().slice(0, 10)){
                    filteredTasks.push(task);
                }
            });

            loadTasks(filteredTasks, category);
            UpdateCategoryHeading("Today");
        }
    }
    else {
        tasks = [];
        localStorage.setItem('Tasks', JSON.stringify(tasks));
    }
};

const loadTasks = (filTasks, category) => {
    let tasks = localStorage.getItem('Tasks');
    tasks = JSON.parse(tasks);

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

            checkbox.addEventListener("click", () => {
                taskHeading.style.textDecoration = "line-through";
                setTimeout(function(){
                    tasks = tasks.filter(item => item.id !== task.id);
                    tasks = JSON.stringify(tasks);
                    localStorage.setItem('Tasks', tasks);
                    InitMain(category);
                    
                }, 500);
            });

            const taskCategory = document.createElement('h2');

            if (category === ''){
                taskCategory.textContent = '(' + task.category + ')';
            }
            else {
                taskCategory.textContent = '';
            }
            
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

        const tasksDiv = document.querySelector('.tasks');
        tasksDiv.appendChild(noTasks);
    }
};