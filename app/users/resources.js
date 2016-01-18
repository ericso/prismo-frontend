// Main module for the users resource

angular
  .module('prismo.users.resources', ['ngResource'])
  .factory('usersResource', usersResource);

usersResource.$inject = ['$resource'];
function usersResource($resource) {
  return $resource(
    'api/v0/users/:userId',
    {},
    {
      query: {
        method:'GET',
        params: {
          userId: 'users'
        },
        isArray: true
      },
      create: {
        method: 'POST'
      },
      update: {
        method: 'PUT'
      },
      destroy: {
        method: 'DELETE'
      }
    }
  );
}
