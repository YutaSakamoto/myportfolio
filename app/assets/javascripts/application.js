$(document).ready(function() {
    $('.nav-button').click(function() {
      $('.nav-button').toggleClass('change');
    });

    $(window).scroll(function(){
      let position = $(this).scrollTop();
      if(position >= 200) {
          $('.nav-menu').addClass('custom-navbar');
      } else {
          $('.nav-menu').removeClass('custom-navbar');
      }
    });

    $(window).scroll(function(){
      let position = $(this).scrollTop();
      if(position >= 650) {
          $('.art-img').addClass('fromLeft');
      } else {
          $('.art-img').removeClass('fromLeft');
      }
    });

    $('.gallery-list-item').click(function() {
      let value = $(this).attr('data-filter');
      if(value === 'all') {
        $('.filter').show(300);
      } else {
        $('.filter').not('.' + value).hide(300);
        $('.filter').filter('.' + value).show(300);
      }
    });

    $('.gallery-list-item').click(function() {
      $(this).addClass('active-item').siblings().removeClass('active-item');
    });


  });





// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require bootstrap-sprockets
//= require jquery
//= require_tree .
