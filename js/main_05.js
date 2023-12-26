// 프로젝트 클릭 시 해당 프로젝트만 표현하기
//const categories = document.querySelector('.category');
//const projects = document.querySelectorAll('.project');

/*
categories.addEventListener('click', (e) => {
    //console.log(e);
    const filter = e.target.dataset.category;
    //console.log(filter);
    projects.forEach((project) => {
       console.log(project.dataset.type);
        if (filter === 'all' || filter === project.dataset.type) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
        // 다른 곳을 클릭하면 함수 빠져나옴
        if(filter == null) {
            return;
        }
        
    })
    const active_button = document.querySelector('.category_selected');
    active_button.classList.remove('category_selected');
    e.target.classList.add('category_selected');
    
})
*/



const categories = document.querySelectorAll('.category_button');
const projects = document.querySelectorAll('.project');

categories.forEach((category)=> {
    category.addEventListener('click', (e)=> {
        const filter = e.target.dataset.category;
        projects.forEach((project)=> {
            if(filter === 'all' || filter === project.dataset.type){
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
            if(filter == null) {
                return;
            }
        })
        // 클릭한 요소에 selected class주기
        const active_btn = document.querySelector('.category_selected');
        active_btn.classList.remove('category_selected');
        e.target.classList.add('category_selected');
        
    })
})
