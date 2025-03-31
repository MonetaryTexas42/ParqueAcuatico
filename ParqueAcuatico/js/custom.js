
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


  const carousel = document.getElementById('carousel-experiencias');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let autoScroll = setInterval(() => {
    if (carousel) carousel.scrollBy({ left: 300, behavior: 'smooth' });
  }, 4000);

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
  });
  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
  });

  carousel.addEventListener('mouseover', () => clearInterval(autoScroll));
  carousel.addEventListener('mouseout', () => {
    autoScroll = setInterval(() => {
      carousel.scrollBy({ left: 300, behavior: 'smooth' });
    }, 4000);
  });


  // Modal dinámico para experiencias
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById('modalExperiencia');
  const overlay = document.getElementById('modalOverlay');
  const closeModal = document.getElementById('closeModal');

  document.querySelectorAll('.experiencia-item').forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img').src;
      const titulo = card.querySelector('h5').textContent;
      const texto = card.querySelector('p').textContent;

      document.getElementById('modalImg').src = img;
      document.getElementById('modalTitulo').textContent = titulo;
      document.getElementById('modalTexto').textContent = texto;

      modal.style.opacity = 0;
      modal.style.display = 'block';
      overlay.style.display = 'block';

      setTimeout(() => {
        modal.style.opacity = 1;
      }, 50);
    });
  });

  function cerrarModal() {
    modal.style.opacity = 0;
    setTimeout(() => {
      modal.style.display = 'none';
      overlay.style.display = 'none';
    }, 300);
  }

  closeModal.addEventListener('click', cerrarModal);
  overlay.addEventListener('click', cerrarModal);
});
