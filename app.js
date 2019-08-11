 

// PARTICLES

 

 particlesJS.load('particles-js', './particles.json', function() { 
     

});

// color properties of particles depending on HTML theme [dark || light]


function changeParticlesColor() {    
    let currentTheme = document.documentElement.getAttribute('data-theme'); 
     fetch( "./particles.json") 
    .then(res => res.json())       
    .then(function(data) {      
        let s = JSON.stringify(data.particles.color.value = "red"); 
    }); 
       

}

 



//theme changer

var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
        changeParticlesColor()
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
        changeParticlesColor()
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 0)
}

  

//nav
let aperto = false;
 

const navSlide  = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.querySelector('body'); 
    const label = document.querySelector('.sitchTheme');
 
    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active'); 
        body.classList.toggle("fixedPosition");  
        aperto === false ? aperto = true :  aperto = false;
         navLinks.forEach(link =>{
            if(link.style.animation){
                label.style.animation = '';
                link.style.animation = '';
            }else {
                link.style.animation = 'navLinkFade 0.5s ease forwards  .65s'; 
                label.style.animation = 'navLinkFade 0.5s ease forwards  .65s'; 
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
    const label = document.querySelector('.sitchTheme');


    if ($(window).width() < 960) {
        console.log(aperto); 

        if(aperto){
            body.classList.toggle("fixedPosition");   
            nav.classList.toggle('nav-active');   
            burger.classList.toggle('toggle'); 
            navLinks.forEach(link =>{
                if(link.style.animation){
                    
                    link.style.animation = '';
                    label.style.animation = '';
                }else {
                    link.style.animation = 'navLinkFade 0.5s ease forwards  .65s'; 
                    label.style.animation = 'navLinkFade 0.5s ease forwards  .65s'; 
               }
             });
         } 
         aperto === false ? aperto = true :  aperto = false;
        }
  }
 
 
navSlide();
 