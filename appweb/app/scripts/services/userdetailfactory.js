'use strict';

/**
 * @ngdoc service
 * @name appwebApp.UserDetailFactory
 * @description
 * # UserDetailFactory
 * Factory in the appwebApp.
 */
angular.module('appwebApp')
  .factory('UserDetailFactory', ['$resource','SERVEAPI', function($resource, SERVEAPI) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return $resource(SERVEAPI+'users/:userId',{userId:'@id'},{

    });
  }]);
