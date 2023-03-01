
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 350) {
            $('.whatsapp').fadeIn();
        } else {
            $('.whatsapp').fadeOut();
        }
    });
});

