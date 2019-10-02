/* Sample function that returns boolean in case the browser is Internet Explorer*/
function isIE() {
    ua = navigator.userAgent;
    /* MSIE used to detect old browsers and Trident used to newer ones*/
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    
    return is_ie; 
  }
  /* Create an alert to show if the browser is IE or not */
  if (isIE()){
      alert('It is InternetExplorer');
  } 

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
$("#toggle").click(function(){$("body").toggleClass("open")});
$("#nav").click(function(){$("body").removeClass("open")});



  //AOS 

AOS.init();
