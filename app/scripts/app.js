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
    'ngResource',
    'ngRoute',
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
  }])
  .value('tasks', [ 
				{ 	
					id : 1,
					title : "Todo one",
					description: "this is the description of the task one",
					date: new Date(),
					done : 0
				},
				{ 
					id: 2,
					title : "Todo two",
					description: "this is the description of the task two.this is the description of the task twothis is the description of the task two",
					date: new Date(),
					done : 0
				},
				{ 
					id : 3,
					title : "Todo three",
					description: "this is the description of the task three",
					date: new Date(),
					done : 1
				},
				{ 
					id : 4,
					title : "Todo four",
					description: "this is the description of the task four",
					date: new Date(),
					done : 0
				}
			]);
