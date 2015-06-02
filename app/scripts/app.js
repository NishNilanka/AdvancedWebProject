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
    'ngTouch'
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
      .otherwise({
        redirectTo: '/'
      });
  });
