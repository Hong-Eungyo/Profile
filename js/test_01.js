// 변수 선언
const about_section = document.querySelector('#about');
const about_title = about_section.querySelector('.section_title');
const line = about_title.getBoundingClientRect().bottom;
const about_box = document.querySelector('.about_content');




document.addEventListener('scroll', () => {
    // console.log(window.scrollY);    
    if (window.scrollY > line - 5) {
        about_box.classList.add('display');
    } else {
        about_box.classList.remove('display');
    }

});


