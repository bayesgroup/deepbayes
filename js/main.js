$(window).load(function() {
    $("#preloader").fadeOut("slow");
});

$(document).ready(function(){

    wow = new WOW({
        mobile:       false,       // default
      }
    )
    wow.init();

    $('#top-nav').onePageNav({
        currentClass: 'current',
        changeHash: true,
        scrollSpeed: 1200
    });

    $('.expandable').each(function() {
        var block = this,
            expand = $('<div class="expand"><span class="caret"></span></div>'),
            actualSize = $('div', block).height() + 20,
            foldedSize = $(block).height();
        expand.click(function() {
            $(block).animate({
                'height': $(block).is('.expanded') ? foldedSize : actualSize
            }).toggleClass('expanded');
        });
        $(this).append(expand);
     })
     
    //animated header class
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".navbar-default").addClass("animated");
        } else {
            $(".navbar-default").removeClass('animated');
        }
    });

});
