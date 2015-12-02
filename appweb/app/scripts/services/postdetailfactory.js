'use strict';

/**
 * @ngdoc service
 * @name appwebApp.PostDetailFactory
 * @description
 * # PostDetailFactory
 * Factory in the appwebApp.
 */
angular.module('appwebApp')
  .factory('PostDetailFactory', ['$resource','SERVEAPI', function($resource, SERVEAPI) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return $resource(SERVEAPI+'photos/:postId',{postId:'@id'},{

    });
  }]);
