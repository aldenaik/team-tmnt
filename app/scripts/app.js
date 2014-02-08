	'use strict';

angular.module('teamApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
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
		      url: "/teamview/:teamId",
		      controller: 'TeamCtrl',
		      templateUrl: "views/teamview.html",
		      resolve:{
		      	team: function($stateParams, TurtleService){
		      		return TurtleService.getTeam($stateParams.teamId);
		  		}
			  }
		     });
		  
		    });



