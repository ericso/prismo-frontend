'use strict';

describe('prismo.home module', function() {

  beforeEach(module('prismo.home'));

  describe('home controller', function(){

    it('should be defined', inject(function($controller) {
      var HomeController = $controller('HomeController');
      expect(HomeController).toBeDefined();
    }));

  });
});
