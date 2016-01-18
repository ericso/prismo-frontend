'use strict';

angular
  .module('prismo.users.controllers', [
    'ngRoute', 'prismo.users.services', 'prismo.flash.services'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: 'users/login.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    })
  }])
  .controller('LoginController', LoginController);


LoginController.$inject = [
    '$location', 'authenticationService', 'FlashService'];
function LoginController($location, authenticationService, FlashService) {
  var vm = this;
  vm.location_ = $location;
  vm.authenticationService_ = authenticationService;
  vm.FlashService_ = FlashService;
}


/**
 * Initializes the LoginController.
 */
LoginController.prototype.initController = function() {
  // reset login status
  this.authenticationService_.clearCredentials();
};


/**
 * Attempts to log in the user with provided credentials.
 */
LoginController.prototype.login = function() {
  this.dataLoading = true;
  this.authenticationService_.Login(
      this.username, this.password, function(response) {
      if(response.success) {
          this.authenticationService_.setCredentials(
              this.username, this.password);
          this.location_.path('/');
      } else {
        this.FlashService_.error(response.message);
        this.dataLoading = false;
      }
  });
};
