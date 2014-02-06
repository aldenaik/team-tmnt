'use strict';

angular.module('teamApp')
  .service('TurtleService', function TurtleService($http,$q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
		 return {
		  		getTeams: function() {
		  var deferred = $q.defer();

		  	$http.get('http://pure-ocean-3603.herokuapp.com/team/').success(function(data) {
		      deferred.resolve(data);
		    });
		  return deferred.promise;
			},
		}

	});

// getTeams: function() {
//   var deferred = $q.defer();

//   $http({method: 'GET', url: 'http://pure-ocean-3603.herokuapp.com/team'}).success(function(data) {
//       deferred.resolve(data);
//     }
//   );
//   return deferred.promise;
// }


// var services = angular.module('myApp.services', []);


// services.factory('srvLibrary', ['$http', function($http) {

// 	var sdo = {

// 		getBooks: function() {

// 			var promise = $http({ method: 'GET', url: 'api/books.php' }).success(function(data, status, headers, config) {
// 				return data;
// 			});

// 			return promise;

// 		},

// 		getMovies: function() {

// 			var promise = $http({ method: 'GET', url: 'api/movies.php' }).success(function(data, status, headers, config) {
// 				return data;
// 			});

// 			return promise;

// 		}

// 	}

// 	return sdo;

// }]);