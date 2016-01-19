'use strict';

describe('prismo.users.services module', function() {

  var q, log, cookies, http;
  var deferred, promise;
  var rootScope;
  var AuthenticationService
  var usersResourceMock = {};
  var EncodingServiceMock = {};

  var username = 'username';
  var password = 'password';
  var authdata = 'someencodedstring';

  beforeEach(module('prismo.users'));

  beforeEach(module(function($provide) {
    $provide.value('usersResource', usersResourceMock);
    $provide.value('EncodingService', EncodingServiceMock);
  }));

  beforeEach(inject(function(
      _$q_, _$log_, _$rootScope_, _$cookies_, _$http_,
      _AuthenticationService_) {
    q = _$q_;
    log = _$log_;
    cookies = _$cookies_;
    http = _$http_;
    deferred = q.defer();
    promise = deferred.promise;

    rootScope = _$rootScope_;
    AuthenticationService = _AuthenticationService_;

    usersResourceMock.login = function() {
      return {$promise: promise};
    };

    EncodingServiceMock.encode = function() {
      return 'someencodedstring';
    };
  }));

  describe('AuthenticationService', function() {

    it('should call setCredentials on successful authentication', function() {
      spyOn(AuthenticationService, 'setCredentials');

      AuthenticationService.login(username, password);
      deferred.resolve('succeeded');
      rootScope.$apply();

      expect(AuthenticationService.setCredentials).toHaveBeenCalled();
    });

    it('should just log a message on unsuccessful authentication', function() {
      spyOn(AuthenticationService, 'setCredentials');
      spyOn(log, 'error');

      AuthenticationService.login(username, password);
      deferred.reject('failed');
      rootScope.$apply();

      expect(AuthenticationService.setCredentials).not.toHaveBeenCalled();
      expect(log.error).toHaveBeenCalled();
    });

    it('should log a user out', function() {
      spyOn(AuthenticationService, 'clearCredentials');
      AuthenticationService.logout();
      expect(AuthenticationService.clearCredentials).toHaveBeenCalled();
    });

    it('should set currentUser credentials on the global object', function() {
      AuthenticationService.setCredentials(username, password);
      var expectedCurrentUser = {
        username: username,
        authdata: authdata
      };
      expect(rootScope.globals.currentUser).toEqual(expectedCurrentUser);
      expect(cookies.getObject('currentUser')).toEqual(expectedCurrentUser);
      expect(http.defaults.headers.common['Authorization']).toBe(
          'Basic ' + authdata);
    });

    it('should clear currentUser credentials on the global object', function() {
      AuthenticationService.clearCredentials();
      expect(rootScope.globals.currentUser).toBe(undefined);
      expect(cookies.getObject('currentUser')).toBe(undefined);
      expect(http.defaults.headers.common['Authorization']).toBe('Basic');
    });

    it('should confirm that a user is logged in on login success',
        function() {
      AuthenticationService.logout();
      AuthenticationService.login('username', 'password');

      deferred.resolve('succeeded');
      rootScope.$apply();

      expect(AuthenticationService.isLoggedIn()).toBe(true);
    });

    it('should confirm that a user is not logged in on login failed',
        function() {
      AuthenticationService.logout();
      AuthenticationService.login('username', 'password');

      deferred.reject('failed');
      rootScope.$apply();

      expect(AuthenticationService.isLoggedIn()).toBe(false);
    });

  });
});
