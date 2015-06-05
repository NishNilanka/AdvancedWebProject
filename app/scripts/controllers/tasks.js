'use strict';
var X;

angular.module('Todoer')
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
			])
  .controller('TasksCtrl', function (tasks, $scope, cfpLoadingBar) {
		$scope.tasks = tasks;
		X = $scope.tasks;
		$scope.markDone = function(id){
			    //ngProgress.start();
			    cfpLoadingBar.start();
				var task = $scope.tasks.filter(function(a){ return a.id == id })[0];
				if(task.done == 0){
					task.done = 1;
				}
				else{
					task.done = 0;
				}
				console.log($scope.tasks);
				//ngProgress.complete();
				cfpLoadingBar.complete();
		}
	
  });
