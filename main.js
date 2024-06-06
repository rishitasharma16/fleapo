import './style.css'


let navbar = document.getElementById('nav')
window.onscroll = ()=>{
    // console.log(navbar)
    let scrollHeight = window.scrollY
    if(scrollHeight >=100){
        navbar.style.background = '#f5f8ff'
        navbar.style.borderBottom = '1px solid white'
       
    }else{
         navbar.style.background = 'rgba(255, 255, 255, 0)'
         navbar.style.borderBottom = 'none'
    }
}


// =========================menu toggle=================
let menuOpen = document.querySelector('.menu-open')
let menuClose = document.querySelector('.menu-close')
let nav = document.querySelector('.navlink')

menuOpen.addEventListener('click',()=>{
    menuOpen.style.display ='none'
    menuClose.style.display = 'block'
    nav.style.display = 'block'
})

menuClose.addEventListener('click',()=>{
     menuOpen.style.display ='block'
    menuClose.style.display = 'none'
    nav.style.display = 'none'
})
