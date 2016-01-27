'use strict';

describe('prismo.users.directives module', function() {
  beforeEach(module('prismo.users.directives'));

  describe('login modal directive', function() {

    var compile, mockBackend, rootScope, controller;
    var ctrl, element;
    var AuthenticationServiceMock = {};

    // The template for the directive.
    var template = '<div class="modal"></div>';

    // The element in the HTML where we create an instance of the directive.
    var directiveElement = '<login-modal></login-modal>';


    beforeEach(module(function($provide) {
      $provide.value('AuthenticationService', AuthenticationServiceMock);
    }));

    beforeEach(inject(function(_$compile_, _$httpBackend_, _$rootScope_,
        _$controller_) {
          compile = _$compile_;
          mockBackend = _$httpBackend_;
          rootScope = _$rootScope_;
          controller = _$controller_;

          var scope = rootScope.$new();

          mockBackend.expectGET('users/login-modal.html').respond(template);

          AuthenticationServiceMock.getCurrentUser = function() {
            return {
              username: 'someuser',
              authdata: 'someauthdata'
            };
          };

          var deps = {
            AuthenticationService: AuthenticationServiceMock
          };
          var data = {};
          element = compile(directiveElement)(scope);
          ctrl = controller('LoginModalController', deps, data);
          scope.$digest();
          mockBackend.flush();
        }));

    afterEach(function() {
      mockBackend.verifyNoOutstandingExpectation();
      mockBackend.verifyNoOutstandingRequest();
    });

    it('should come up with a useful test', function() {
      // TODO(ericso): replace with something good
      expect(true).toBe(true);
    });
  });

});
