//Show the menu in mobile//
document.getElementsByClassName('arrow-down')[0].addEventListener('click', toggleMenu);
function toggleMenu() {    
    document.getElementById('ul-btns').classList.toggle("show");
}
