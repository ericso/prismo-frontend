'use strict';

angular
  .module('prismo.about.controllers', [
    'ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/about', {
      templateUrl: 'about/about.html',
      controller: 'AboutController'
    });
  }])
  .controller('AboutController', AboutController);

/**
 * Constructor the AboutController.
 */
function AboutController() {

}
