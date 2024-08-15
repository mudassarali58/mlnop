document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector('.burger');
    const navlist = document.querySelector('.navlist');

    burger.addEventListener('click', function() {
        navlist.classList.toggle('active');
    });
});
