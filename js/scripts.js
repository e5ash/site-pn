$( document ).ready(function() {
    // Popup
    var Popup = {
        block: $('.popup'),
        window: $('.popup__window'),
        container: $('.popup__container'),
        head: $('.popup__head'),
        body: $('.popup__body'),
        title: $('.popup__title'),
        close: $('.popup__close'),
        bg: $('.popup__bg'),
        speed: 500,
        type: {
            search: $('.popup_search'),
            question: $('.popup_question')
        },
        funShow: function (object) {
            var scrollTop = $(window).scrollTop(),
                height = $(window).height();
            object.css('padding-top', scrollTop).fadeIn(this.speed).height(height - scrollTop - 20);
        },
        funHide: function (object) {
            this.block.fadeOut(this.speed);
        }
    };

    $('.question').click(function() {
        Popup.funShow(Popup.type.question);
    });

    $('.search__advanced').click(function() {
        Popup.funShow(Popup.type.search);
    });

    Popup.close.click(function() {
        Popup.funHide();
    });

    Popup.bg.click(function() {
        Popup.funHide();
    });

    $('.cities__btns-all').click(function() {
        $('.cities__checkbox input').each(function() {
           $(this).attr('checked', 'checked');
        });     
    });

    $('.cities__btns-clear').click(function() {
        $('.cities__checkbox input').each(function() {
           $(this).removeAttr('checked');
        });     
    });

    $('.map-search__clear').click(function() {
        $('.map-search__name, .map-search__price-input, .map-search__area-input').val("");
    });

    // Select
    var select = $('.select');
    select.each(function() {
        var parent = $(this),
            selectTitle = $(this).find($('.select__title')),
            selectList = $(this).find($('.select__list')),
            selectParsing = $(this).find($('.select__parsing')),
            selectParsingItem = $(this).find($('.select__parsing option'));
        if (selectParsing) {
            selectParsingItem.each(function() {
                selectParsingItemText = $(this).text();
                selectParsingItemValue = $(this).attr('value');
                var selectString = '<li class="select__list-item" data-target="' + selectParsingItemValue + '">' + selectParsingItemText + '</li>';
                selectList.append(selectString);
                if ($(this).attr('selected')) {
                    selectTitle.text(selectParsingItemText);
                }
                selectParsingItemText = selectParsingItemValue = null;
            });
        }
        parent = selectTitle = selectList = selectParsing = selectParsingItem = selectString = null;
    });
    function selectOpen(){
        $('.select__title').click(function() {
            var parent = $(this).parents('.select');
            parent.toggleClass('select_open');
            parent = null;

        });
    }
    selectOpen();

    function selectItemActive() {
        $('.select__list-item').click(function() {
            var parent = $(this).parents('.select'),
                parsingItem = parent.find($('.select__parsing option')),
                attr = $(this).attr('data-target'),
                title = parent.find($('.select__title'));
            parsingItem.each(function() {
                $(this).removeAttr('selected');
                if ($(this).attr('value') == attr) {
                    var text = $(this).text();
                    title.text(text);
                    $(this).attr('selected', 'selected');
                }
            });
            parent.toggleClass('select_open');
            parent = parsingItem = attr = title = null;

        });
    }
    selectItemActive();
    select = null;



    var tabs = $('.tabs');
    tabs.each(function() {
        var parent = $(this);
        tabsNav = $(this).find('.tabs__nav'),
            tabsNavItem = $(this).find('.tabs__nav-item');
        tabsNavItem.each(function() {
            var attr = $(this).attr('data-tab');
            if ($(this).hasClass('tabs__nav-item_select')) {
                var tab = parent.find('#' + attr);
                tab.show();
            }
            attr = tab = null;
        });
        parent = tabsNav = tabsNavItem = null;
    });

    function tabsActive() {
        $('.tabs__nav-item').click(function() {
            var parent = $(this).parents('.tabs'),
                attr = $(this).attr('data-tab'),
                tabs = parent.find('.tabs__tab'),
                navItem = parent.find('.tabs__nav-item');
            navItem.each(function() {
                $(this).removeClass('tabs__nav-item_select');
            });
            if ($(this).hasClass('tabs__nav-item_select') == false) {
                $(this).addClass('tabs__nav-item_select');
                tabs.each(function() {
                    // tabs.html(1);
                    $(this).hide();
                    // $(this).html(1);
                });

                var tab = parent.find('#' + attr);
                tab.show();

            }
            parent = attr = tab = tabs = navItem = null;
        });
    }
    tabsActive();
    tabs = null;


    // slick

    $('.objects-slider').slick({
        slidesToShow: 3,
        responsive: [{
          breakpoint: 1210,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 790,
          settings: {
            slidesToShow: 1
          }

        }]
    });

    $('.developers-slider > div').slick({
        slidesToShow: 4,
        responsive: [{
          breakpoint: 1210,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 790,
          settings: {
            slidesToShow: 1
          }

        }]
    });


    $('.panorams__left .panorams__list').slick({
        slidesToShow: 1,
        // centerMode: true,
        asNavFor: '.panorams__right .panorams__list'
    });

    $('.panorams__right .panorams__list').slick({
        slidesToShow: 2,
        vertical: true,
        asNavFor: '.panorams__left .panorams__list',
        focusOnSelect: true
    });

    var citySelect = $('.city-select');

    $('.city-select .select__title, .city-select .select__list-item').click(function() {
        citySelect.toggleClass('city-select_open');
    });

    $(function(){

        $('.footer__go-top').on('click', function(e){
          $('html,body').stop().animate({ scrollTop: $('.header').offset().top }, 1000);
          e.preventDefault();
        });

    });




    $('.country__map-btn').click(function() {
        $('.country__map-wrapper').toggleClass('country__map-wrapper_height');
    });

    $('.product__img').slick({
        arrows: false,
        asNavFor: '.product__images'
    });

    $('.product__images').slick({
        slidesToShow: 7,
        variableWidth: true,
        centerMode: true,
        asNavFor: '.product__img',
        focusOnSelect: true
    });



    $('#layout-1 .layout__slider').slick({
        slidesToShow: 3,
        responsive: [{
          breakpoint: 765,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 500,
          settings: {
            slidesToShow: 1
        }}]
    })

    $('.tabs__nav-item[data-tab=layout-2]').click(function() {
        $('#layout-2 .layout__slider').slick({
            slidesToShow: 3
        })
    });

    $('.tabs__nav-item[data-tab=layout-3]').click(function() {
        $('#layout-3 .layout__slider').slick({
            slidesToShow: 3
        })
    });

    $('.banks-slider').slick({
        slidesToShow: 5,
        responsive: [{
          breakpoint: 1230,
          settings: {
            slidesToShow: 4
          }
        }, {
          breakpoint: 790,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 590,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 450,
          settings: {
            slidesToShow: 1
          }

        }]
    })
    $('.docs').slick({
        slidesToShow: 5,
        arrows: false,
        responsive: [{
          breakpoint: 1230,
          settings: {
            slidesToShow: 4
          }
        }, {
          breakpoint: 790,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 590,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 450,
          settings: {
            slidesToShow: 1
          }

        }]
    })

    $('.photo-slider').slick({
        slidesToShow: 3,
        centerMode: true,
        variableWidth: true
    })

    // Product nav fixed



    // Nav item to #

    $(".product__nav ul").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top - 85}, 1000);
    });


    
});
var top_show = 150;
var delay = 1000;
$(document).ready(function() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > top_show) $('#go-top').fadeIn();
      else $('#go-top').fadeOut();
    });
    $('#go-top').click(function () {
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
});