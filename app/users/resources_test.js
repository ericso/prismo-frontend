'use strict';

describe('prismo.users.resources module', function() {

  var usersResource;

  beforeEach(module('prismo.users'));

  beforeEach(inject(function(_usersResource_) {
    usersResource = _usersResource_;
  }));

  describe('usersResource', function() {

    it('should finish writing test', function() {
      expect(false).toBe(true);
    });

  });
});
