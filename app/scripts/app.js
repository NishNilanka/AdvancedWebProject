'use strict';

/**
 * 
 * @name Todo Application
 * @description A simple todo application
 * 
 */
angular
  .module('Todoer', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'cfp.loadingBar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/tasks/', {
        templateUrl: 'views/tasks.html',
        controller: 'TasksCtrl'
      })
      .when('/tasks/{date}', {
        templateUrl: 'views/tasks.html',
        controller: 'TasksCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: ''
      })
      .when('/new', {
        templateUrl: 'views/add.html',
        controller: ''
      })
	   .when('/search', {
        templateUrl: 'views/Search.html',
        controller: ''
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.latencyThreshold = 0;
  }]);
