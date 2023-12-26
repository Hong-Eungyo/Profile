// 변수 선언
const about_section = document.querySelector('#about');
const line = about_section.offsetHeight;
const about_box = document.querySelector('.about_content');


document.addEventListener('scroll', () => { 
    if (window.scrollY > line / 2) {
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

const bars = document.querySelectorAll('.bar_value');
const skills = document.querySelector('#skills');
const skillsHeight = skills.offsetTop;


document.addEventListener('scroll', ()=> {
 if (window.scrollY >  skillsHeight) {
    bars.item(0).style.width ='98%';
    bars.item(1).style.width ='90%';
    bars.item(2).style.width = '80%';
    bars.item(3).style.width = '76%';
 } else {
    bars.item(0).style.width = 0;
    bars.item(1).style.width = 0;
    bars.item(2).style.width = 0;
    bars.item(3).style.width = 0;
 }
});


