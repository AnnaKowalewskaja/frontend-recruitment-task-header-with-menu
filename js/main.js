const searchForm = document.querySelector(".search__form");
const menu = document.querySelector(".nav__menu");
const menuCloseButton = document.querySelector(".menu__close");

searchForm.addEventListener('mousemove', ()=>{
    searchForm.classList.add('search__form_active');
    searchForm.classList.add('transition');
});

searchForm.addEventListener('mouseout', ()=>{
    searchForm.classList.remove('search__form_active');
   
});
/*
menuCloseButton.addEventListener('click', ()=>{
    menu.classList.remove('is-active');
    menuCloseButton.classList.remove('is-active');
});


searchForm.addEventListener('click', ()=>{
    menu.classList.add('is-active');
    menuCloseButton.classList.add('is-active');
});

menuCloseButton.addEventListener('click', ()=>{
    menu.classList.remove('is-active');
    menuCloseButton.classList.remove('is-active');
});*/