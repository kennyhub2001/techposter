let menu=document.querySelector(".menu");
let submenu=document.querySelector(".second-nav");

function showMenu(){
    menu.style.display = 'none' ? menu.style.display = "block" : menu.style.display = "none";
}

const showSubMenu = () => {
    submenu.style.top = '-150px' ? submenu.style.top = "50px" : submenu.style.top = "-150px";
}