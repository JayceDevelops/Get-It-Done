export const UpdateCategoryHeading = (category) => {
    const categoryHeading = document.querySelector('.mainHeading > h1');
    categoryHeading.textContent = category;

    const MainHeading = document.querySelector(".mainHeading");
    if (category !== "Today" && category !== "Upcoming" && category !== "Someday" && category !== "Anytime"){
        
        const Edit = document.createElement('h3');
        Edit.textContent = "Edit";

        MainHeading.appendChild(Edit);
    }
    else {
        if (MainHeading.innerHTML.includes('<h3')){
            const editText = document.querySelector('.mainHeading > h3');
            editText.remove();
        }
    }
};