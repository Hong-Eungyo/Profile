// 변수 선언
const header = document.querySelector('.header'),
      headerHeight = header.getBoundingClientRect().height;
// getBoundingClientRect -> 요소의 가로, 세로 길이의 값을 가져옴

// 마우스가 스크롤 될 때 window 높이에 따라 이벤트 발생
document.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    if(window.scrollY > headerHeight) {
        header.classList.add('header-dark');
    } else {
        header.classList.remove('header-dark');
    }
});