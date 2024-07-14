/* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */
        function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
          }
          
          // Close the dropdown if the user clicks outside of it
          window.onclick = function(e) {
            if (!e.target.matches('.dropbtn')) {
            var myDropdown = document.getElementById("myDropdown");
              if (myDropdown.classList.contains('show')) {
                myDropdown.classList.remove('show');
              }
            }
          }

          const swiper = new Swiper(".swiper-slider", {
            centeredSlides: true,
            slidesPerView: 1,
            grabCursor: true,
            freeMode: false,
            loop: true,
            mousewheel: false,
            keyboard: {
              enabled: true
            },
            autoplay: {
              delay: 3000,
              disableOnInteraction: false
            },
            pagination: {
              el: ".swiper-pagination",
              dynamicBullets: false,
              clickable: true
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            },
            breakpoints: {
              640: {
                slidesPerView: 1.25,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20
              }
            }
          });