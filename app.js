const responsiveMenu = document.querySelector('#resp-menu');
        const navbarMenu = document.querySelector('.nav-menu');

        responsiveMenu.addEventListener('click', function(){
            responsiveMenu.classList.toggle('is-active');
            navbarMenu.classList.toggle('active');
        })

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


