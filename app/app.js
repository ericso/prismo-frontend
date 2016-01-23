'use strict';

// Declare app level module which depends on views, and components
angular.module('prismo', [
  'ngRoute',
  'prismo.encoding',
  'prismo.flash',
  'prismo.version',
  'prismo.users',
  'prismo.home',
  'prismo.view2'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
