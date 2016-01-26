(function() {

'use strict';

angular
  .module('prismo.users.directives', [
    'prismo.users.services'
  ])
  .directive('loginModal', function() {
    return {
      templateUrl: 'users/login-modal.html',
      restrict: 'E',
      scope: {},
      bindToController: {
      },
      controller: 'LoginModalController',
      controllerAs: 'vm'
    };
  })
  .controller('LoginModalController', LoginModalController);


LoginModalController.$inject = ['AuthenticationService'];


/**
 * Controller for login modal directive.
 */
function LoginModalController(AuthenticationService) {
  this.AuthenticationService_ = AuthenticationService;
};

})();
