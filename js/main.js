console.log("Привет");
$('.block-1').addClass('block-2');
$('.block-1').removeClass('block-2');
// console.log($('.block-1'))

$('.block-2').click(function() {
    // $('.block-1').toggleClass('block-2');
    // $('.block-1').show(800)
    // $('.block-1').hide(800)
    // $('.block-1').toggle(800)
    // $(this).toggleClass('red')
})
$('.block').click(function() {
    // $('.block-1').toggleClass('block-2');
    // $('.block-1').show(800)
    // $('.block-1').hide(800)
    // $('.block-1').toggle(800)
    // $('.block').toggleClass('red')
    // применяется ко всем блоками
    // $(this).toggleClass('red')
    // применяется только к блоку на котором клик
    // $(this).next().toggleClass('red')
    // кликая меняется следующий
    // $(this).prev().toggleClass('red')

    // $(this).parent().toggleClass('red')
    // $(this).children().toggleClass('red')
    // $(this).children().toggleClass('red')
    // $(this).closest('html').toggleClass('red')
    // $(this).closest('html').find('.block-2').toggleClass('red')
    $(this).siblings().toggleClass('red')
    // Поиск в потоке кроме самого себя на одном уровне вложенности
})
$('.slider').slick({
    infinite: true,
    // бесконечный слайдер
    slidesToShow: 3,
    // сколько слайдов показывть на экране
    slidesToScroll: 3
    // сколько слайдов перематывать при прокрутке
    // responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true,
    //         dots: true
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     }

    // responsive - для адаптации медиа запросов
  });

