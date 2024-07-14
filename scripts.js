document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-slider', {
      // Swiper configuration options
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  
    const clickableImages = document.querySelectorAll('.clickable');
  
    clickableImages.forEach((image, index) => {
      image.addEventListener('click', function () {
        // Navigate to the next page with the corresponding index
        window.location.href = `next_page.html?index=${index}`;
      });
    });
  });
  