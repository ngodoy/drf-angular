'use strict';

/**
 * @ngdoc service
 * @name appwebApp.PhotoListFactory
 * @description
 * # PhotoListFactory
 * Factory in the appwebApp.
 */
angular.module('appwebApp')
  .factory('PhotoListFactory', ['$resource','SERVEAPI', function($resource, SERVEAPI) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return $resource(SERVEAPI+'photos/',null,{

    });
  }]);
