const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');
const menuOptions = document.querySelectorAll("#navbar > a");

/*este abre y cierra el iconito del menu*/
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

/*acá se cierra el menu por cada opción que toque*/
for (let i = 0; i < menuOptions.length; i++) {
    menuOptions[i].addEventListener('click', () => {
        navbar.classList.toggle('active');
    })
}