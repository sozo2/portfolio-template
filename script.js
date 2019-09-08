$(document).ready(function() {

    var navbar = $("#navbar");
    var nav_offset = $(window).height() * .12;
    var about_top = $("#about").offset().top - nav_offset;
    var about_bottom = $("#education").offset().top;
    var projects_top = $("#projects").offset().top - nav_offset;
    var projects_bottom = $("#contact").offset().top - nav_offset;

    var my_position = $(window).scrollTop();
    if (my_position >= about_top && my_position <= about_bottom) {
        navbar.css("border-bottom","1px solid #e0e0e0");
    } else if (my_position >= projects_top && my_position < projects_bottom) {
        navbar.css("border-bottom","1px solid #e0e0e0");
    } else {
        navbar.css("border-bottom","none");
    }

    $(function () {
        $(window).scroll(function () {
            var my_position = $(window).scrollTop();
            if (my_position >= about_top && my_position <= about_bottom) {
                navbar.css("border-bottom","1px solid #e0e0e0");
            } else if (my_position >= projects_top && my_position < projects_bottom) {
                navbar.css("border-bottom","1px solid #e0e0e0");
            } else {
                navbar.css("border-bottom","none");
            }
        });
    });

    $(".menu-option").click(function(){
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
                }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

});