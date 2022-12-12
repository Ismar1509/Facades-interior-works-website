//Dropdown responsive menu
const responsiveMenu = document.querySelector('#resp-menu');
        const navbarMenu = document.querySelector('.nav-menu');

        responsiveMenu.addEventListener('click', function(){
            responsiveMenu.classList.toggle('is-active');
            navbarMenu.classList.toggle('active');
        })


//Top button
let mybutton = document.getElementById("topBtn");

        window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
            mybutton.fadeIn();
          } else {
            mybutton.style.display = "none";
            mybutton.fadeOut();
          }
        }
        
        function topReturn() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
          $("html, body").animate({ scrollTop: 0 }, 600); 
          return false; 
        }

//Flipping cards
const card = document.getElementById("card");
card.addEventListener("mouseenter", flipCard);

function flipCard(){
  card.classList.toggle("flipCard");
}

const cardEmp0 = document.getElementById("card");
cardEmp0.addEventListener("mouseleave", flipCard);

function returnCard(){
  cardEmp0.classList.toggle("flipCard");
}




