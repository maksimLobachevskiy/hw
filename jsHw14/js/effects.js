//Кнопка наверх
$(function () {
    $.fn.scrollToTop = function () {
        $(this).hide();
        if ($(window).scrollTop() >= 360) $(this).fadeIn("slow")
        let scrollDiv = $(this);
        $(window).scroll(function () {
            if ($(window).scrollTop() <= 360) $(scrollDiv).fadeOut("slow")
            else $(scrollDiv).fadeIn("slow")
        });
        $(this).click(function () {
            $("html, body").animate({scrollTop: 0}, 1500)
        })
    }
});
$(function () {
    $("#Go_Top").scrollToTop();
});

//Меню по разделам
$('.header__menu a').click(function (e) {
    let linkHref = $(this).attr("href");
    let idElement = linkHref.substr(linkHref.indexOf("#"));
    $('html, body').animate({
        scrollTop: $(idElement).offset().top
    }, 1000);
    return false;
});

//Скрывает секцию top rated
$(function () {
    $(".slide-toggle").click(function () {
        $(".top-rated").slideToggle(1500);
    });
});