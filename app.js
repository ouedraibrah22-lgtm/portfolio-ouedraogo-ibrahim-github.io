const div = document.querySelectorAll('div');
const linksNav = document.querySelectorAll('.navigation a');
const header = document.querySelector('header');
const btnHome = document.querySelector('.btn-home');
const menulcon = document.querySelector('#menu-burger');
const nav = document.querySelector('.navigation');


const burgerActive = () => {  
    menulcon.classList.toggle('bx-x');
    nav.classList.toggle('active');
}

const scrollActive = () => {
    div.forEach(div => {
        let top = window.scrollY;
        let offset = div.offsetTop - 150;
        let height = div.offsetHeight;
        let id = div.getAttribute('id');
        if(top >= offset && top < offset + height) {
            linksNav.forEach(linksNav => {
                linksNav.classList.remove('active');
                document.querySelector('.navigation a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}



const typed = new Typed('.multiple', {
    strings: ['DÉVELOPPEUR DATA IA'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

menulcon.addEventListener('click', burgerActive);
window.addEventListener('scroll', scrollActive);

scrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});