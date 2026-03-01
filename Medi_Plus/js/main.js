// Custom scripts for Mediplus Website
// Add your JavaScript here if needed

$(document).ready(function() {
  // Mark current page link active (for multi-page nav)
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  $(".navbar-nav .nav-link").each(function() {
    var href = $(this).attr('href');
    if (href && !href.startsWith('#')) {
      var page = href.split('/').pop();
      if (page === currentPath) {
        $(this).addClass('active');
        $(this).closest('.nav-item').addClass('active');
      }
    }
  });

  // Smooth scroll for same-page anchors
  $('.navbar-nav .nav-link').on('click', function(e) {
    var target = $(this).attr('href');
    if (target && target.startsWith('#')) {
      e.preventDefault();
      var $target = $(target);
      if ($target.length) {
        var offset = $target.offset().top - 90; // adjust for top bar/nav
        $('html, body').animate({scrollTop: offset}, 600);
      }
    }
  });

  // Sticky navbar after top bar (if present)
  var $navbar = $('#main-navbar');
  var $topBar = $('.top-bar');
  if ($navbar.length && $topBar.length) {
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > $topBar.outerHeight()) {
        if (!$navbar.hasClass('fixed-top')) {
          $navbar.addClass('fixed-top');
          $navbar.css('top', 0);
        }
      } else {
        $navbar.removeClass('fixed-top');
        $navbar.css('top', '');
      }
    });
  }
}); 
