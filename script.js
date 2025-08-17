const hamburgerBtn = document.querySelector('.hamburger');
const main = document.querySelector('main');
const menuLinks = document.querySelector('#Menulinks');
const cancelIcon = document.querySelector('.cancelIcon')

hamburgerBtn.addEventListener('click', ()=>{
    menuLinks.classList.add('activeMenues');
    cancelIcon.classList.add('show');

    hamburgerBtn.classList.add('hide');
    menuLinks.classList.remove('move');


});

cancelIcon.addEventListener('click', removeAnchorLinks);
    
main.addEventListener('click', removeAnchorLinks);

function removeAnchorLinks(){
    cancelIcon.classList.remove('show');
    hamburgerBtn.classList.remove('hide');
    menuLinks.classList.add('move');
}
