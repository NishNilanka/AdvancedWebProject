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
