jQuery(function ($) {
  'use strict';

  $('.social-slides').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    nextArrow: '<button class="slick-next"></button>',
    prevArrow: '<button class="slick-prev"></button>',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: false,
          arrows: true,
          infinite: true,
          speed: 300,
          nextArrow: '<button class="slick-next"></button>',
          prevArrow: '<button class="slick-prev"></button>',
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: false,
          arrows: true,
          infinite: true,
          speed: 300,
          nextArrow: '<button class="slick-next"></button>',
          prevArrow: '<button class="slick-prev"></button>',
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: true,
          infinite: true,
          speed: 300,
          nextArrow: '<button class="slick-next"></button>',
          prevArrow: '<button class="slick-prev"></button>',
          slidesToScroll: 1,
        }
      }
    ]
  });

});