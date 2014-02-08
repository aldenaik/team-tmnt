	'use strict';


angular.module('teamApp')
  .controller('MainCtrl', function ($scope, teams) {
  	$scope.teams = teams;

  });


