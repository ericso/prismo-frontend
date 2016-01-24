'use strict';

angular
  .module('prismo.menubar.directives', [
    'prismo.users.services'
  ])
  .directive('menubar', function() {
    return {
      templateUrl: 'menubar/menubar.html',
      restrict: 'E',
      scope: {},
      bindToController: {
        appname: '=',
        tabs: '='
      },
      controller: MenubarController,
      controllerAs: 'vm'
    };
  });


MenubarController.$inject = ['AuthenticationService'];


/**
 * Controller for menubar directive.
 */
function MenubarController(AuthenticationService) {
  this.AuthenticationService_ = AuthenticationService;
  this.user = null;

  this.initController();
};


/**
 * Initializes the MenubarController.
 */
MenubarController.prototype.initController = function() {
  this.loadCurrentUser();
};


/**
 * Checks to see if there's a currently logged in user. If so, load it.
 */
MenubarController.prototype.loadCurrentUser = function() {
  this.user = this.AuthenticationService_.getCurrentUser();
};
