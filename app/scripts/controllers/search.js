'use strict';

angular.module('Todoer')
  .controller('SearchCtrl', function(tasks, $scope){
	  $scope.tasks = tasks;
	  $scope.query = "";
	  alert($scope.tasks);
  });
  
