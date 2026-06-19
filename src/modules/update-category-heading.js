export const UpdateCategoryHeading = (category) => {
    const categoryHeading = document.querySelector('.mainHeading > h1');
    categoryHeading.textContent = category;
};