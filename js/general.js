//Show the menu in mobile//
function toggleMenu() {
    let nav = document.querySelector('nav');
    let ul = nav.getElementsByTagName('ul');
    ul[0].classList.toggle("show");
}
