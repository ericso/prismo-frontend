(function() {

'use strict';

angular
  .module('prismo.home.controllers', [
    'ngRoute',
    'prismo.users.services'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'home/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    })
  }])
  .controller('HomeController', HomeController);


/**
 * Constructor the HomeController.
 */
function HomeController() {}

})();
