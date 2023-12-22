// 변수 선언
const about_section = document.querySelector('#about');
const about_title = about_section.querySelector('.section_title');
const line = about_title.getBoundingClientRect().bottom;
const about_box = document.querySelector('.about_content');




document.addEventListener('scroll', () => {
    // console.log(window.scrollY);    
    if (window.scrollY > line) {
        about_box.classList.add('display');
    } else {
        about_box.classList.remove('display');
    }

});

const imgs = document.querySelectorAll('.testimonial_img');
const text = document.querySelectorAll('.testimonial_bubble');

for (const img of imgs) {
    img.addEventListener('click', (e)=> {
        if(e.target == imgs.item(0)){
            text.item(0).style.color = 'red';
        } else if (e.target == imgs.item(1)) {
            text.item(1).style.color = 'red';
        } else {
            text.item(2).style.color = 'red';
        }
    })
}


