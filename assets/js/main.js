$(function(){
    
    // Sticky Header adds CSS to make a header stick once it 
    // hits the top of the screen
    var sticky = $('.sticky-header'),
        alias = $('.sticky-alias'),
        stickyHeaderTop = sticky.offset().top;

    if(stickyHeaderTop === 0) {
        alias.height(sticky.outerHeight());
        sticky.addClass('header-fixed');
    }
    
    $(window).scroll(function(){
        if( $(window).scrollTop() >= stickyHeaderTop ) {
            alias.css('display', 'block');
            sticky.addClass('header-fixed');
        }
        else {
            alias.css('display', 'none');
            sticky.removeClass('header-fixed');
        }
    });

    // On mobile, the menu will toggle open and closed via
    // a touch method rather than on hover
    $(document).on('click','#menu-toggle',function(){
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