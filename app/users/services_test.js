'use strict';

describe('prismo.users.services module', function() {

  var authenticationService;

  beforeEach(module('prismo.users'));

  beforeEach(inject(function(_authenticationService_) {
    authenticationService = _authenticationService_;
  }));

  describe('authenticationService', function() {

    it('should log a user in', function() {
      expect(false).toBe(true);
    });

  });
});
