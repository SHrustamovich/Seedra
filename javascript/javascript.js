let burgerBtn = document.getElementById("burger")
const menu = document.getElementById("menu")
const close = document.getElementById("close-id")

burgerBtn.addEventListener('click', function(){
    if(menu.classList.contains('header__menu-listopen')){
        menu.classList.remove('header__menu-listopen')
        burgerBtn.children[0].setAttribute('src', './icon/menu-icon.svg')
    }else{
        menu.classList.add('header__menu-listopen')
        burgerBtn.children[0].setAttribute('src', './icon/cl.svg')
    }
})  

// const categoryArr = [
//     {
//         "id":0,
//         "name":"ALL",
//         "src":'../../icon/cate01.svg'
//     },
//     {
//         "id":1,
//         "name":"BUNDLES",
//         "src":'../../icon/cate02.svg'
//     },
//     {
//         "id":2,
//         "name":"HERBS",
//         "src":'../../icon/cate03.svg'
//     },
//     {
//         "id":3,
//         "name":"VEGETABLES",
//         "src":'../../icon/cate04.svg'
//     },
//     {
//         "id":4,
//         "name":"FRUITS",
//         "src":'../../icon/cate05.svg'
//     },
//     {
//         "id":5,
//         "name":"SUPPLIES",
//         "src":'../../icon/cate06.svg'
//     },
//     {
//         "id":6,
//         "name":"FLOWERS",
//         "src":'../../icon/cate07.svg'
//     }
// ]
// const categoryBtn = document.querySelector(".product__category-btn")
// console.log(categoryBtn);
// categoryArr.map((e) => {
//     categoryBtn
// })