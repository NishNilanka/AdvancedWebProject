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
  
else{
	 var un = document.forms["login"]["username"].value;
        var pw = document.forms["login"]["password"].value;
        var username = "username"; 
        var password = "password";
        if ((un == username) && (pw == password)) {
		window.alert(5 + 6);
            return true;
        }
        else {
            alert ("Login was unsuccessful, please check your username and password");
			window.alert(1);
            return false;
        }
}
}




var imageCount = 1;
var total = 5;

function photo(x) {
	var image = document.getElementById('image');
	imageCount = imageCount + x;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "../app/images/Slider/img"+ imageCount +".jpg";
	clearInterval(time); 								// clear interval stops the set interval.
	time =  window.setInterval(function photoA() { 		// givig the value of time the samfunction below starts the loop 
	var image = document.getElementById('image');
	imageCount = imageCount + 1;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "../app/images/Slider/img"+ imageCount +".jpg";
	},2000);
	}
 
var time = window.setInterval(function photoA() {    // just addign the sunction to the variable so you can target it.
	var image = document.getElementById('image');
	imageCount = imageCount + 1;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "../app/images/Slider/img"+ imageCount +".jpg";
	},2000);

$(document).ready(function() {

	$('.photos img').css('opacity', 0.4);
	$('.photos li').hover(
	  function(){
		$(this).find('img').stop().fadeTo('slow', 1);
	  },
	  function(){
		$(this).find('img').stop().fadeTo('slow', 0.4);
	  });

});

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));