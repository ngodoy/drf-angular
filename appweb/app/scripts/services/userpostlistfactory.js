'use strict';

/**
 * @ngdoc service
 * @name appwebApp.UserPostListFactory
 * @description
 * # UserPostListFactory
 * Factory in the appwebApp.
 */
angular.module('appwebApp')
  .factory('UserPostListFactory', ['$resource','SERVEAPI', function($resource, SERVEAPI) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return $resource(SERVEAPI+'users/:userId/posts',{userId:'@id'},{

    });
  }]);
