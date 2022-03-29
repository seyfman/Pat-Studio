$(document).ready(function () {




    $('.nav-link').on('click', function () {
        $('.navbar-collapse').removeClass('show');
        $a = $($(this).attr('href'));
        $('html,body').animate({ scrollTop: $a.offset().top - 70 });
        return false;
    });



});