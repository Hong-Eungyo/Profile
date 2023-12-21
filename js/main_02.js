//마우스를 아래로 스크롤 할 때 home 부분을 투명처리하기
const home =document.querySelector('.home_container'),
      homeHeight = home.offsetHeight;
/*
개체.offsetHeight : 윈도우 화면 맨 위에서부터 
아래(y축)로 어느 정도 떨어져 있는지 알려주는
메소드 (method) 입니다.
수직의 패딩과 테두리를 포함하여 요소의 높이를 정수로 반환합니다.
*/

document.addEventListener('scroll', () => {
    console.log(homeHeight);
    home.style.opacity = 1 - (window.scrollY / homeHeight);
});

const img = document.querySelector('.testimonial_img'),
      bubble = document.querySelector('.testimonial_bubble');

img.addEventListener('click', () => {
    bubble.style.color = 'red';
});