'use strict';

describe('prismo.appinfo.directives module', function() {
  beforeEach(module('prismo.appinfo.directives'));

  describe('appName directive', function() {
    it('should print the app name', function() {
      module(function($provide) {
        $provide.value('appname', 'TEST_NAME');
      });
      inject(function($compile, $rootScope) {
        var element = $compile('<span app-name></span>')($rootScope);
        expect(element.text()).toEqual('TEST_NAME');
      });
    });
  });

  describe('appVersion directive', function() {
    it('should print current version', function() {
      module(function($provide) {
        $provide.value('version', 'TEST_VER');
      });
      inject(function($compile, $rootScope) {
        var element = $compile('<span app-version></span>')($rootScope);
        expect(element.text()).toEqual('TEST_VER');
      });
    });
  });
});
