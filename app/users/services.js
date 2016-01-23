'use strict';

angular
  .module('prismo.users.services', [
    'ngCookies', 'prismo.users.resources', 'prismo.encoding.services'])
  .service('AuthenticationService', [
    '$log', '$cookies', '$rootScope', '$http',
    'usersResource', 'EncodingService',
    AuthenticationService]);



/**
 * Constructor for the AuthenticationService.
 *
 * The AuthenticationService should provide two functions:
 * 1. It should make an API call to a backend to authenticate a set of
 *    credentials.
 * 2. It should provide a mechanism to check that a user is logged in in any
 *    controller.
 */
function AuthenticationService(
    $log, $cookies, $rootScope, $http, usersResource, EncodingService) {
  this.log_ = $log;
  this.cookies_ = $cookies;
  this.rootScope_ = $rootScope;
  this.http_ = $http;
  this.usersResource_ = usersResource;
  this.EncodingService_ = EncodingService;

  this.initService();
};


/**
 * Initializes settings for the service.
 */
AuthenticationService.prototype.initService = function() {
  if (typeof this.rootScope_.globals === 'undefined') {
    this.rootScope_.globals = {};
  }
};


/**
 * API call to log in the user.
 */
AuthenticationService.prototype.login = function(username, password) {
  var self = this;
  var success = function(value) {
    self.setCredentials(username, password);
  };
  var error = function(reason) {
    self.log_.error(reason);
  }
  self.usersResource_.login({username: username, password: password})
    .$promise.then(success, error);
};


/**
 * Log the user out. Does not make a call the the backend API.
 */
AuthenticationService.prototype.logout = function() {
  this.clearCredentials();
  // TODO(eso): broadcast message indicating user has logged out.
};


/**
 * Checks to see if the user is currently logged in.
 */
AuthenticationService.prototype.isLoggedIn = function() {
  return (typeof this.rootScope_.globals.currentUser !== 'undefined') ?
      true : false;
};


/**
 * Returns the current user on the rootScope globals if exists. Else, null.
 */
AuthenticationService.prototype.getCurrentUser = function() {
  return this.isLoggedIn() ? this.rootScope_.globals.currentUser : null;
};


/**
 * Sets credentials on the rootScope globals object.
 */
AuthenticationService.prototype.setCredentials = function(username, password) {
  var authdata = this.EncodingService_.encode(username + ':' + password);
  this.rootScope_.globals.currentUser = {
    username: username,
    authdata: authdata
  };
  this.cookies_.putObject('currentUser', this.rootScope_.globals.currentUser);
  this.http_.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
};


/**
 * Clears the credentials on the rootScope globals object.
 */
AuthenticationService.prototype.clearCredentials = function() {
  if (typeof this.rootScope_.globals.currentUser !== 'undefined') {
    this.rootScope_.globals.currentUser = null;
  }
  this.cookies_.remove('currentUser');
  this.http_.defaults.headers.common.Authorization = 'Basic';
};
