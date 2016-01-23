'use strict';

describe('prismo.about.controllers module', function() {

  beforeEach(module('prismo.about.controllers'));

  describe('about controller', function(){

    it('should be defined', inject(function($controller) {
      var AboutCtrl = $controller('AboutController');
      expect(AboutCtrl).toBeDefined();
    }));

  });
});
