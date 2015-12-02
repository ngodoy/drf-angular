'use strict';

/**
 * @ngdoc service
 * @name appwebApp.PhotoDetailFactory
 * @description
 * # PhotoDetailFactory
 * Factory in the appwebApp.
 */
angular.module('appwebApp')
  .factory('PhotoDetailFactory', ['$resource','SERVEAPI', function($resource, SERVEAPI) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return $resource(SERVEAPI+'photos/:photoId',{photoId:'@id'},{

    });
  }]);

