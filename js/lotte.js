//nav 서브타이틀
let titles = document.querySelectorAll('.title');
let sub_titles = document.querySelectorAll('.sub_title');
let sub_title_wrap = document.querySelector('.sub_title_wrap');
let gnb= document.querySelector('.gnb');


titles.forEach(function(title,p){
    title.addEventListener('mouseenter',function(){
        for(let o=0;o<titles.length;o++){
            sub_titles[o].classList.remove('see_op')
            titles[o].classList.remove('liColor')
            titles[o].classList.remove('underline')
        }
        sub_titles[p].classList.add('see_op')
        titles[p].classList.add('liColor')
        sub_title_wrap.classList.add('see')
        titles[p].classList.add('underline')
    })
    sub_title_wrap.addEventListener('mouseleave',function(){
        sub_titles[p].classList.remove('see_op')
        sub_title_wrap.classList.remove('see')
        titles[p].classList.remove('liColor')
        titles[p].classList.remove('underline')
    })
})

// 햄버튼
let ham = document.querySelector('.ham_btn');
let hamTit = document.querySelector('.ham_title_wrap');
let ham1= document.querySelector('.ham1');
let ham2= document.querySelector('.ham2');
let ham3= document.querySelector('.ham3');
    ham.addEventListener('click',()=>{
        hamTit.classList.toggle('view')
        ham1.classList.toggle('active')
        ham2.classList.toggle('active')
        ham3.classList.toggle('active')
    })


//산업재렌탈 추천부분
let list_titles = document.querySelectorAll('.list_title');
let rentals= document.querySelectorAll('.rental');

list_titles[0].classList.add('active');
rentals[0].classList.add('show');

list_titles.forEach(function(list_title,i){
    list_title.addEventListener('click',function(){
        for(let j=0;j<list_titles.length;j++){
            list_titles[j].classList.remove('active')
            rentals[j].classList.remove('show')
        } list_title.classList.add('active')
        rentals[i].classList.add('show')
    })
} 
);

