(function() {

'use strict';

angular
  .module('prismo.users.resources', [
    'ngResource'
  ])
  .factory('usersResource', usersResource);

usersResource.$inject = ['$resource'];
function usersResource($resource) {
  return $resource(
    'api/v0/users/:user',
    {user: '@user'},
    {
      get: {
        method:'GET',
      },
      save: {
        method: 'POST'
      },
      update: {
        method: 'PUT'
      },
      delete: {
        method: 'DELETE'
      },
      login: {
        url: 'api/v0/authenticate',
        method: 'POST',
      }
    }
  );
}

})();
