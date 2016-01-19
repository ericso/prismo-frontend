'use strict';

describe('prismo.users.resources module', function() {

  var usersResource;
  var httpBackend;

  beforeEach(module('prismo.users'));

  beforeEach(inject(function(_usersResource_, _$httpBackend_) {
    usersResource = _usersResource_;
    httpBackend = _$httpBackend_;
  }));

  describe('usersResource', function() {

    // a GET request to endpoint users w/o an ID should not be allowed
    // a GET request to a user w/ id should get user details
    //   but only if the user is authenticated for that user

    // a POST request should create a new user
    it('should be able to log a user in', function() {
      httpBackend
        .expectPOST('api/v0/authenticate')
        .respond(function() {
          var statusCode = 201;
          var responseBody = JSON.stringify({
            username: 'username',
            success: true
          });
          var headers = {};
          var responseText = '';
          return [statusCode, responseBody, headers, responseText];
        });

      var loginResult = usersResource.login(
          {username: 'someuser', password: 'somepassword'});

      httpBackend.flush();

      expect(loginResult['username']).toEqual('username');
      expect(loginResult['success']).toEqual(true);
    });

  });
});
