/*jshint unused:false, undef:false */

jQuery(document).ready(function($) {


  // // fix content being blurred within transformed element
  // $('.js-fix-blur').each(function() {
  //   var height = $(this).height();
  //   var roundedHeight = Math.ceil(height);
  //   if (roundedHeight % 2) {
  //     roundedHeight = roundedHeight + 1;
  //   }
  //   $(this).height(roundedHeight);
  // });


  // var responsive_viewport = $(window).width();
  // if (responsive_viewport < 768) {}
  // if (responsive_viewport >= 768) {}
  // if (responsive_viewport >= 1200) {}


  var responsive_viewport = $(window).width();
  // if (responsive_viewport < 768) {}
  if (responsive_viewport >= 1440) {
    // $('.hero').css({'height':'100vh'});
  }
  if (responsive_viewport >= 1441) {
  var s = skrollr.init();

// $('.hero').css({'height':'80vh'});

  }

  if (responsive_viewport >= 1340) {
  var s = skrollr.init();
  }


  // // scroll watcher
  // $(window).scroll(function() {
  //     var scroll = $(window).scrollTop();
  //     var headerHeight = $('.header').outerHeight();
  //     var introHeight = $('.intro').outerHeight();
  //
  //     if (scroll > 10) {
  //       if (!$('.header').hasClass("scrolled")) {
  //         $('.header').addClass("scrolled");
  //       }
  //     } else {
  //       if ($('.header').hasClass("scrolled")) {
  //         $('.header').removeClass("scrolled");
  //       }
  //     }
  //
  //     if (scroll > introHeight / 2) {
  //       if (!$('.header').hasClass("outro")) {
  //         $('.header').addClass("outro");
  //       }
  //     } else {
  //       if ($('.header').hasClass("outro")) {
  //         $('.header').removeClass("outro");
  //       }
  //     }
  // });


  // // tb pop toggle
  // $('[data-pop-toggle]').click(function(e) {
  //   e.preventDefault();
  //   var pop = '#' + $(this).attr('data-pop-toggle');
  //   $(pop).addClass('open');
  //   $('body').addClass('prevent-scroll')
  // });
  //
  // $('.pop-close').click(function() {
  //   $(this).parent('.pop-wrap').removeClass('open');
  //   $('body').removeClass('prevent-scroll')
  // });


  // // Create fresco gallery of wordpress galleries
  // $('.gallery a').addClass('fresco');
  //
  // $('.gallery').each(function(i) {
  //   $(this).find('a').each(function() {
  //     $(this).attr('data-fresco-group', 'gallery' + i);
  //   });
  // });


});
