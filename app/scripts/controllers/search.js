'use strict';

angular.module('Todoer')
  .controller('searchCtrl', function($scope)){
      $scope.sr="NaSH";
    $scope.result= function(){
	    return $scope.sr;
  }


  });