//Кнопка наверх
$(function () {
    $.fn.scrollToTop = function () {
        let toTop = ("#Go_Top");
        $(toTop).hide();
        if ($(window).scrollTop() >= 360) $(toTop).fadeIn("slow")
        $(window).on('scroll', function () {
            if ($(window).scrollTop() <= 360) $(toTop).fadeOut("slow")
            else $(toTop).fadeIn("slow")
        });
        $(toTop).on('click', function () {
            $("html, body").animate({scrollTop: 0}, 1500)
        })
    }
});
$(function () {
    $("#Go_Top").scrollToTop();
});

//Меню по разделам
$(".header__menu a").on('click', function () {
    let linkHref = $(this).attr("href");
    let idElement = linkHref.substr(linkHref.indexOf("#"));
    $('html, body').animate({
        scrollTop: $(idElement).offset().top
    }, 1000);
    return false;
});

//Скрываем секцию top rated
$(function () {
    $(".slide-toggle").on('click', function () {
        $(".top-rated").slideToggle(1500);
    });
});