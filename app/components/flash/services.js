'use strict';

angular
  .module('prismo.flash.services', [])
  .service('FlashService', ['$rootScope', FlashService]);


/**
 * Constructor for the FlashService.
 */
function FlashService($rootScope) {
  this.rootScope_ = $rootScope;
  this.initService();
};


/**
 * Should run when the flashService object is constructed.
 */
FlashService.prototype.initService = function() {
  var self = this;
  self.rootScope_.$on('$locationChangeStart', function() {
    self.clearFlashMessage();
  });
};


/**
 * Removes the flash message from the $rootScope.
 */
FlashService.prototype.clearFlashMessage = function() {
  var self = this;
  var flash = this.rootScope_.flash;
  if(flash) {
    if(!flash.keepAfterLocationChange) {
      self.rootScope_.flash = null;
    } else {
      // only keep for a single location change
      flash.keepAfterLocationChange = false;
    }
  }
};


/**
 * Sets a success flash message on the $rootScope.
 */
FlashService.prototype.success = function(
    message, keepAfterLocationChange) {
  this.rootScope_.flash = {
    message: message,
    type: 'success',
    keepAfterLocationChange: keepAfterLocationChange
  };
};


/**
 * Sets an error flash message on the $rootScope.
 */
FlashService.prototype.error = function(message, keepAfterLocationChange) {
  this.rootScope_.flash = {
    message: message,
    type: 'error',
    keepAfterLocationChange: keepAfterLocationChange
  };
};
