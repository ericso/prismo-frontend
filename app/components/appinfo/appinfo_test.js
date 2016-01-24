'use strict';

describe('prismo.appinfo module', function() {
  beforeEach(module('prismo.appinfo'));

  describe('appname service', function() {
    it('should return the app name', inject(function(appname) {
      expect(appname).toEqual('Prismo');
    }));
  });

  describe('version service', function() {
    it('should return the current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
