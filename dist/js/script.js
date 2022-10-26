const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');
const menuLink = document.querySelector('.menu__list');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuLink.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percents = document.querySelectorAll('.skills__quality-percent');
const lines = document.querySelectorAll('.skills__quality-graphic-load');

percents.forEach((p, i) => {
    const percent = Number.parseInt(p.innerHTML);
    if (percent < 0) {
        lines[i].style.width = '0%';
        return;
    }
    if (percent > 100) {
        lines[i].style.width = '100%';
        return;
    }
    if (!Number.isNaN(percent)) {
        lines[i].style.width = p.innerHTML;
    } else {
        lines[i].style.width = '0%';
    }
});
