$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      //Only animate the top navigation
      if (target.length && 
         (target.selector == "#our-story"     || 
          target.selector == "#event-details" ||
          target.selector == "#getting-here"  ||
          target.selector == "#things-to-do"  ||
          target.selector == "#registry")) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});