'use strict';

angular.module('prismo.appinfo', [
  'prismo.appinfo.filters',
  'prismo.appinfo.directives'
])

.value('appname', 'Prismo')
.value('version', '0.1');
