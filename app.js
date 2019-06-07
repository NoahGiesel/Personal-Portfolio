 
//theme changer

var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}

 

//nav
let aperto = false;
 

const navSlide  = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.querySelector('body');
 
    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active'); 
        body.classList.toggle("fixedPosition");   
        aperto === false ? aperto = true :  aperto = false;
         navLinks.forEach(link =>{
            if(link.style.animation){
 
                link.style.animation = '';
            }else {
                link.style.animation = 'navLinkFade 0.5s ease forwards  .65s'; 
           }
         });   
         burger.classList.toggle('toggle');
     }); 
}
 
function myFunction() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li ');
    const body = document.querySelector('body');
    if ($(window).width() < 960) {
        console.log(aperto); 

        if(aperto){
            body.classList.toggle("fixedPosition");   
            nav.classList.toggle('nav-active');   
            burger.classList.toggle('toggle');
            navLinks.forEach(link =>{
                if(link.style.animation){
     
                    link.style.animation = '';
                }else {
                    link.style.animation = 'navLinkFade 0.5s ease forwards  .65s'; 
               }
             });
         } 
         aperto === false ? aperto = true :  aperto = false;
        }
  }
 
 
navSlide();