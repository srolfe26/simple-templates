$(function(){
    
    // Sticky Header adds CSS to make a header stick once it 
    // hits the top of the screen
    $('.sticky-alias').height($('.sticky-header').outerHeight());
    var stickyHeaderTop = $('.sticky-header').offset().top;
    
    $(window).scroll(function(){
        if( $(window).scrollTop() >= stickyHeaderTop ) {
            $('.sticky-alias').css('display', 'block');
            $('.sticky-header').addClass('header-fixed');
        }
        else {
            $('.sticky-alias').css('display', 'none');
            $('.sticky-header').removeClass('header-fixed');
        }
    });

    // On mobile, the menu will toggle open and closed via
    // a touch method rather than on hover
    $(document).on('click touchstart','#menu-toggle',function(){
        var wrapperFooter = $('.page-wrap, .site-footer'),
            menu = $('.slide-holder');

        if(wrapperFooter.hasClass('menu-open')) {
            wrapperFooter.removeClass('menu-open');
            menu.removeClass('active');
        }
        else {
            wrapperFooter.addClass('menu-open');
            menu.addClass('active');
        }
    });

});