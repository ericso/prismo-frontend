'use strict';

describe('prismo.flash.services module', function() {

  var rootScope, FlashService;

  beforeEach(module('prismo.flash.services'));

  beforeEach(inject(function(_$rootScope_, _FlashService_) {
    rootScope = _$rootScope_;
    FlashService = _FlashService_;
  }));

  describe('FlashService', function() {

    it('should have the initService method', function() {
      expect(FlashService.initService).toBeDefined();
    });

    it('should null the $rootScope.flash object on $locationChangeStart', function() {
      rootScope.flash = {};
      rootScope.$broadcast('$locationChangeStart');
      expect(rootScope.flash).toBeNull();
    });

    it('should set the type of the $rootScope.flash object success', function() {
      FlashService.success('a message', false);
      expect(rootScope.flash.message).toEqual('a message');
      expect(rootScope.flash.type).toEqual('success');
      expect(rootScope.flash.keepAfterLocationChange).toEqual(false);
    });

    it('should set the type of the $rootScope.flash object error', function() {
      FlashService.error('a message', false);
      expect(rootScope.flash.message).toEqual('a message');
      expect(rootScope.flash.type).toEqual('error');
      expect(rootScope.flash.keepAfterLocationChange).toEqual(false);
    });
  });
});
