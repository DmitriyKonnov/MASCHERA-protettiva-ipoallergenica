const swiperPaginationActive = document.querySelector('.swiper-pagination-bullet-active');
swiperPaginationActive

const swiper = new Swiper('.swiper', {
    loop: true,
    
    pagination: {
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '<span class="' + 'swiper-pagination-bullet-active-click' + '">' +  '</span>' + '</span>';
      },
      el: '.swiper-pagination',
    },
  });