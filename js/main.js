const searchForm = document.querySelector(".search__form");


searchForm.addEventListener('mousemove', ()=>{
    searchForm.classList.add('search__form_active');
    searchForm.classList.add('transition');
});

searchForm.addEventListener('mouseout', ()=>{
    searchForm.classList.remove('search__form_active');
    itemNav.classList.remove('transition');
});


const itemLinkMenu1 = document.querySelector(".item__link-menu");
const itemNav1 = document.querySelector(".item__nav");

itemLinkMenu.addEventListener('click', ()=>{
    itemNav.classList.remove('item__nav-none');
    
});








const menuCloseButton = document.querySelector(".menu__close");





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