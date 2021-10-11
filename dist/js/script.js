window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.nav-list'),
  menuItem = document.querySelectorAll('.nav-list__item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('nav-list_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('nav-list_active');
      })
  })
});

$(document).ready(function(){
    

    function validForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                  },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста введите своё имя",
                    minlength: jQuery.validator.format("Введите хотя бы {0} символа!")
                  },
                phone: "Пожалуйста введите свой номер телефона",
                email: {
                  required: "Пожалуйста введите свою почту",
                  email: "Введите адрес почты в формате name@domain.com"
                }
              }
        });
    };
    validForms('.consul-form');
    validForms('.question-form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $('.carousel').slick({
      slidesToShow: 3,
      centerMode: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrowL.png" alt="arrow left"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/arrowR.png" alt="arrow right"></button>',
      centerPadding: '11px',

      responsive: [
        {
            breakpoint: 991,
            settings: {
              arrows: true,
              slidesToShow: 1,
              dots: true
            }
        }
       
    ]
    });
});

