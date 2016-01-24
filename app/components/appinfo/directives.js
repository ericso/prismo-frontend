'use strict';

angular
  .module('prismo.appinfo.directives', [])
  .directive('appName', ['appname', function(appname) {
    return function(scope, elm, attrs) {
      elm.text(appname);
    };
  }])
  .directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
