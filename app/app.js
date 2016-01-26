(function() {

'use strict';

// Declare app level module which depends on views, and components
angular.module('prismo', [
  'ngRoute',
  'prismo.encoding',
  'prismo.flash',
  'prismo.appinfo',
  'prismo.users',
  'prismo.menubar',
  'prismo.home',
  'prismo.about'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);

})();
