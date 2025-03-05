(function () {
    let navbar = document.querySelector('#navbar');
    let hamburger = document.querySelector('#hamburguesa');
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('open');
    });
})()