src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">

'use strict';


angular.module('Todoer')
  .controller('MainCtrl', function ($scope) {

  });

function signinCallback(authResult) {
  if (authResult['status']['signed_in']) {
    // Update the app to reflect a signed in user
    // Hide the sign-in button now that the user is authorized, for example:
    document.getElementById('signinButton').setAttribute('style', 'display: none');
  } else {
    // Update the app to reflect a signed out user
    // Possible error values:
    //   "user_signed_out" - User is signed-out
    //   "access_denied" - User denied access to your app
    //   "immediate_failed" - Could not automatically log in the user
    console.log('Sign-in state: ' + authResult['error']);
  }
}

function validateForm()
{
var x=document.forms["login"]["username"].value;
if (x==null || x=="")
  {
  alert("Please fill out the username");
  return false;
  }
}

  function render() {
    gapi.signin.render('customBtn', {
      //'callback': 'signinCallback',
      'clientid': '841077041629.apps.googleusercontent.com',
      'cookiepolicy': 'single_host_origin',
      'requestvisibleactions': 'http://schema.org/AddAction',
      'scope': 'https://www.googleapis.com/auth/plus.login'
    });
  }

function slider() {

    function animate_slider(){
        $('.slider #'+shown).animate({
            opacity:0 // fade out
        },1000);
        $('.slider #'+next_slide).animate({
            opacity:1.0 // fade in
        },1000);
        shown = next_slide;
    }

    function choose_next() {
        next_slide = (shown == sc)? 1:shown+1;
        animate_slider();
    }

    $('.slider #1').css({opacity:1}); //show 1st image
    var shown = 1;
    var next_slide;
    var sc = $('.slider img').length; // total images
    var iv = setInterval(choose_next,3500);
    $('.slider_nav').hover(function(){
        clearInterval(iv); // stop animation
    }, function() {
        iv = setInterval(choose_next,3500); // resume animation
    });
    $('.slider_nav span').click(function(e){
        var n = e.target.getAttribute('name');
        if (n=='prev') {
            next_slide = (shown == 1)? sc:shown-1;
        } else if(n=='next') {
            next_slide = (shown == sc)? 1:shown+1;
        } else {
            return;
        }
        animate_slider();
    });
}

window.onload = slider;