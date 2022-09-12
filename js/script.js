let Nav = document.querySelector('nav');
let MenuBar = document.querySelector('#menu_bar');
let Navigation = document.querySelector('.navigation');
let Hiring = document.querySelector('.hiring');

MenuBar.addEventListener('click', () =>{
    setTimeout(() => {
        Nav.classList.toggle('nav_height')
        Navigation.classList.toggle('hidden');
        Hiring.classList.toggle('hidden');  
    }, 100);
})