'use strict';

// Declare app level module which depends on views, and components
angular.module('prismo', [
  'ngRoute',
  'prismo.view1',
  'prismo.view2',
  'prismo.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
