'use strict';

angular.module('Todoer')
  .controller('searchCtrl', function($scope)){
      $scope.sr="NSH";
    $scope.result= function(){
	    return $scope.sr;
  }
  });
  
