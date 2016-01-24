'use strict';

angular
  .module('prismo.appinfo.filters', [])
  .filter('interpolateAppname', ['appname', function(appname) {
    return function(text) {
      return String(text).replace(/\%APPNAME\%/mg, appname);
    }
  }])
  .filter('interpolateVersion', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]);
