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

$(document).ready(function() {
  $('.photo-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title');
      }
    },
    gallery: {
      enabled: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image

    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }
    
  });
});