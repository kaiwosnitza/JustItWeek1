/*---------------------------------------------------------------------
            LUMIERE FICTIONAL WEBSITE SCRIPT FILE
---------------------------------------------------------------------*/


/*---------------------------------------------------------------------
                        MOBILE DEVICES MENU SCRIPT
---------------------------------------------------------------------*/

    $("span.navBtn").click(function() {

        $("#mainMenu").slideToggle();
    });


   /* $(window).resize(function() {

        if ( $(window).width() > 768 ) {

            $("#mainMenu").removeAttr("style");
        }
    });*/
$("#mainMenu li").on("click", function(){
        
        if ( $(window).width() < 1024 ) {
        $("span.navBtn").click();
        }
    });


/*---------------------------------------------------------------------
                        SMOOTH SCROLLING OF ALL LINKS
---------------------------------------------------------------------*/

$(function() {
        $('.navC a, .actionB a, .logoC a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 100
            }, 1000);
            event.preventDefault();
        });
    });