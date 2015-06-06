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


var rev = "fwd";
function titlebar(val){
    var msg  = "Todoer";
    var res = "";
    var speed = 100;
    var pos = val;  
    var le = msg.length;
    if(rev == "fwd"){ 
        if(pos < le){ 
            pos = pos+1; 
            scroll = msg.substr(0,pos); 
            document.title = scroll; 
            timer = window.setTimeout("titlebar("+pos+")",speed); 
        } else { 
            rev = "bwd"; 
            timer = window.setTimeout("titlebar("+pos+")",speed); 
        }
    } else { 
        if(pos > 0) {
            pos = pos-1; 
            var ale = le-pos; 
            scrol = msg.substr(ale,le); 
            document.title = scrol; 
            timer = window.setTimeout("titlebar("+pos+")",speed); 
        } else { 
            rev = "fwd"; 
            timer = window.setTimeout("titlebar("+pos+")",speed); 
        }
    }
}
titlebar(0);

var imageCount = 1;
var total = 6;

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

