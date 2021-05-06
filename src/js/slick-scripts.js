"use strict"
let bg__elements = document.querySelectorAll('.bg-src');
if(bg__elements){
  bg__elements.forEach(element => {
    let bg_img_src = element.getAttribute('data-bg-src');
    element.style.backgroundImage = 'url(' + bg_img_src + ')';
  });
}

//слайдер в шапке на главной странице
if($('.main-slider__list')){
  $('.main-slider__list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,               
    dots: true,
    fade: true,
    speed: 1000,
    useTransform: true,
    cssEase: 'ease-out',
    arrows:false,
    infinite: true,
    dotsClass: 'main-slider__slick-dots'
  });
}

//слайдер на главной в сеции скидок
if($('.discounts__sliders')){
  $('.discounts__slider').slick({
    slidesToShow: 3,
    margin: 45,
    slidesToScroll: 1,               
    dots: false,
    infinite: true,
    prevArrow:'<button class="discount-prev"><i class="far fa-angle-left"></i></button>',
    nextArrow:'<button class="discount-next"><i class="far fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
          dotsClass: 'main-slider__slick-dots',
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          dotsClass: 'main-slider__slick-dots',
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
          dotsClass: 'main-slider__slick-dots',
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
          dotsClass: 'main-slider__slick-dots',
        }
      }
    ]
  })
  //выравнивание слайдов по высоте
  // .on('setPosition', function (event, slick) {
  //   slick.$slides.css('height', slick.$slideTrack.height() + 'px');
  // })
  ;
}
//слайдер на главной в секции блога
if($('.blog-section__slider')){
  $('.blog-section__slider').slick({
    slidesToShow: 5,
    margin: 45,
    arrows: true,
    slidesToScroll: 1,               
    dots: false,
    infinite: true,
    prevArrow:'<button class="blog-section-prev"><i class="far fa-angle-left"></i></button>',
    nextArrow:'<button class="blog-section-next"><i class="far fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
          dotsClass: 'main-slider__slick-dots',
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          dotsClass: 'main-slider__slick-dots',
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          dotsClass: 'main-slider__slick-dots',
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          dotsClass: 'main-slider__slick-dots',
        }
      }
    ]
  })
  //выравнивание слайдов по высоте
  // .on('setPosition', function (event, slick) {
  //   slick.$slides.css('height', slick.$slideTrack.height() + 'px');
  // })
  ;
}
