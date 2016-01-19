'use strict';

// Declare app level module which depends on views, and components
angular.module('prismo', [
  'ngRoute',
  'prismo.encoding',
  'prismo.flash',
  'prismo.version',
  'prismo.users',
  'prismo.view1',
  'prismo.view2'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
