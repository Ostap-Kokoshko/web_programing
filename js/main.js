const burgerIcon = document.querySelector('.header__menu');
const menuItems = document.querySelector('#header__upper__nav');

burgerIcon.addEventListener('click', () => {
    menuItems.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.querySelector(".image-container");

    function slideIn() {
        imageContainer.style.left = "0";
    }

    setTimeout(slideIn, 1000);
});