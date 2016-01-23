'use strict';

angular
  .module('prismo.home.controllers', [
    'ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'home/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    })
  }])
  .controller('HomeController', HomeController);


function HomeController() {}
