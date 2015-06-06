'use strict';
var X;

angular.module('Todoer')	
  .controller('TasksCtrl', function (tasks, $scope, cfpLoadingBar) {
		$('#author').html("Milindu Sanoj Kumarage");
		if(localStorage.getItem('taskItems')){
			$scope.tasks = jQuery.parseJSON(localStorage.getItem('taskItems'));
		}
		else{
			$scope.tasks = tasks;
			localStorage.setItem('taskItems', JSON.stringify(tasks) );
		}
		
		X = $scope.tasks;
		$scope.markDone = function(id){
			    cfpLoadingBar.start();
				var task = $scope.tasks.filter(function(a){ return a.id == id })[0];
				if(task.done == 0){
					task.done = 1;
					var audio = $("audio")[0].play();
				}
				else{
					task.done = 0;
				}
				console.log($scope.tasks);
				localStorage.setItem('taskItems', JSON.stringify($scope.tasks) );
				cfpLoadingBar.complete();
		}
	
  });
