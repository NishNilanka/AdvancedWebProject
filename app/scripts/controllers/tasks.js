'use strict';

angular.module('Todoer')
  .controller('TasksCtrl', function ($scope) {
	$scope.tasks = [ 
				{ 
					title : "Todo one",
					description: "this is the description of the task one",
					date: new Date(),
					status: 0
				},
				{ 
					title : "Todo two",
					description: "this is the description of the task two.this is the description of the task twothis is the description of the task two",
					date: new Date(),
					status: 0
				},
				{ 
					title : "Todo three",
					description: "this is the description of the task three",
					date: new Date(),
					status: 0
				},
				{ 
					title : "Todo four",
					description: "this is the description of the task four",
					date: new Date(),
					status: 0
				}
					]
  });
