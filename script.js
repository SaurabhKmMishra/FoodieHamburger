const hamburgerBtn = document.querySelector('.hamburger');
const menuLinks = document.querySelector('#Menulinks');
const cancelIcon = document.querySelector('.cancelIcon')

hamburgerBtn.addEventListener('click', ()=>{
    menuLinks.classList.add('activeMenues');
    // menuLinks.classList.remove('anchorTags');//
    cancelIcon.classList.add('show');

    hamburgerBtn.classList.add('hide');
    menuLinks.classList.remove('move');



});

cancelIcon.addEventListener('click', () => {
    cancelIcon.classList.remove('show');
    hamburgerBtn.classList.remove('hide');
    menuLinks.classList.add('move');
    menuLinks.classList.remove('activeMenues');
    menuLinks.classList.add('anchorTags'); //
});