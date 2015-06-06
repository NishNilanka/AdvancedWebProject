'use strict';
var X;

angular.module('Todoer')	
  .controller('TasksCtrl', function (tasks, $scope, cfpLoadingBar) {
		
		if(localStorage.getItem('taskItems')){
			$scope.tasks = jQuery.parseJSON(localStorage.getItem('taskItems'));
		}
		else{
			$scope.tasks = tasks;
			localStorage.setItem('taskItems', JSON.stringify(tasks) );
		}
		
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
				localStorage.setItem('taskItems', JSON.stringify(tasks) );
				cfpLoadingBar.complete();
		}
	
  });
