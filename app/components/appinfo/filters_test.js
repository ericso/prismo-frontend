'use strict';

describe('prismo.appinfo.filters module', function() {
  beforeEach(module('prismo.appinfo.filters'));

  describe('interpolateAppname filter', function() {
    beforeEach(module(function($provide) {
      $provide.value('appname', 'TEST_NAME');
    }));

    it('should replace APPNAME', inject(function(interpolateAppnameFilter) {
      expect(interpolateAppnameFilter('before %APPNAME% after')).toEqual('before TEST_NAME after');
    }));
  });

  describe('interpolateVersion filter', function() {
    beforeEach(module(function($provide) {
      $provide.value('version', 'TEST_VER');
    }));

    it('should replace VERSION', inject(function(interpolateVersionFilter) {
      expect(interpolateVersionFilter('before %VERSION% after')).toEqual('before TEST_VER after');
    }));
  });
});
