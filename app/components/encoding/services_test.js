'use strict';

describe('prismo.encoding.services module', function() {

  var EncodingService;
  var originalString = 'some not-so-random string';
  var encodedString = 'c29tZSBub3Qtc28tcmFuZG9tIHN0cmluZw==';

  beforeEach(module('prismo.encoding.services'));

  beforeEach(inject(function(_EncodingService_) {
    EncodingService = _EncodingService_;
  }));

  describe('EncodingService', function() {

    it('should encoding a string in base64', function() {
      var output = EncodingService.encode(originalString);
      expect(output).toBe(encodedString);
    });

    it('should decode a string in base64', function() {
      var output = EncodingService.decode(encodedString);
      expect(output).toBe(originalString);
    });

  });
});
