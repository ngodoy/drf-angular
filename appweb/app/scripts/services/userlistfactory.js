'use strict';

/**
 * @ngdoc service
 * @name appwebApp.UserListFactory
 * @description
 * # UserListFactory
 * Factory in the appwebApp.
 */
angular.module('appwebApp')
  .factory('UserListFactory', ['$resource','SERVEAPI', function($resource, SERVEAPI) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return $resource(SERVEAPI+'users',null,{

    });
  }]);
