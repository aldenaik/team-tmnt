'use strict';

angular.module('teamApp', [
	'ui.router'
	])
.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");
		$stateProvider
		    .state('main', {
		      url: "/",
		      controller: 'MainCtrl',
		      templateUrl: "views/main.html",
		      resolve:{
		      	'teams': function(TurtleService){
		      		return TurtleService.getTeams();
		      	}
		      }
		    })
		    .state('team', {
		      url: "/teamview",
		      controller: 'TeamCtrl',
		      templateUrl: "views/teamview.html",
		      resolve:{
		      	'teams': function($stateParams, TurtleService){
		      		return TurtleService.getTeams($stateParams.teamId);
		  		}
			  }
		     });
		  
		    });
