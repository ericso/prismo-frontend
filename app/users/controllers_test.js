'use strict';

describe('prismo.users.controllers module', function() {

  beforeEach(module('prismo.users.controllers'));

  describe('LoginController', function(){

    it('should be defined', inject(function($controller) {
      var loginCtrl = $controller('LoginController');
      expect(loginCtrl).toBeDefined();
    }));

  });
});
