'use strict';

describe('prismo.menubar.directives module', function() {
  beforeEach(module('prismo.menubar.directives'));

  describe('menubar directive', function() {

    var compile, mockBackend, rootScope, controller;
    var ctrl, element;
    var AuthenticationServiceMock = {};

    // The template for the directive.
    var template = '<a href="#/home">{{ vm.appname }}</a>' +
        '<li ng-repeat="tab in vm.tabs">' +
        '<a href="{{ tab.path }}">{{ tab.displayName }}</a></li>';

    // The element in the HTML where we create an instance of the directive.
    var directiveElement = '<menubar appname="appname" tabs="tabs"></menubar>';

    var appname = "Prismo";
    var tabs = [
      {
        'path': '#/home',
        'displayName': 'Home'
      }, {
        'path': '#/about',
        'displayName': 'About'
      }
    ];

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
          scope.appname = appname;
          scope.tabs = tabs;

          mockBackend.expectGET('menubar/menubar.html').respond(template);

          AuthenticationServiceMock.getCurrentUser = function() {
            return {
              username: 'username',
              authdata: 'someauthdata'
            };
          };

          var deps = {
            AuthenticationService: AuthenticationServiceMock
          };
          var data = {
            appname: appname,
            tabs: tabs
          };
          element = compile(directiveElement)(scope);
          ctrl = controller(MenubarController, deps, data);
          scope.$digest();
          mockBackend.flush();
        }));

    afterEach(function() {
      mockBackend.verifyNoOutstandingExpectation();
      mockBackend.verifyNoOutstandingRequest();
    });

    it('should contain the app name', function() {
      expect(element.html()).toContain('Prismo');
    });

    it('should contain the tabs', function() {
      expect(element.html()).toContain('#/home');
      expect(element.html()).toContain('Home');
    });

    it('should try to load the current user', function() {
      spyOn(AuthenticationServiceMock, 'getCurrentUser');
      ctrl.loadCurrentUser();
      expect(AuthenticationServiceMock.getCurrentUser).toHaveBeenCalled();
    });
  });

});
