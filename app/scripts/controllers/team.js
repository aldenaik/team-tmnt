	'use strict';

angular.module('teamApp')
  .controller('TeamCtrl', function ($scope, team) {
    $scope.team = team;
    angular.forEach($scope.team, function(value){
    	$scope.characters = value;

    });
  });

