//top btn scroll opacity change
const home = document.querySelector('#home');
const homeHeight = home.offsetHeight;
const topBtn = document.querySelector('.arrow_up');

document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2) {
        topBtn.style.opacity = 1;
    } else {
        topBtn.style.opacity = 0;
    }
});