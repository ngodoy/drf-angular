'use strict';

/**
 * @ngdoc service
 * @name appwebApp.PostPhotoListFactory
 * @description
 * # PostPhotoListFactory
 * Factory in the appwebApp.
 */
angular.module('appwebApp')
  .factory('PostPhotoListFactory',['$resource','SERVEAPI', function($resource, SERVEAPI) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return $resource(SERVEAPI+'posts/:postId/photos',{postId:'@id'},{

    });
  }]);
