'use strict';

angular.module('prismo.version', [
  'prismo.version.interpolate-filter',
  'prismo.version.version-directive'
])

.value('version', '0.1');
