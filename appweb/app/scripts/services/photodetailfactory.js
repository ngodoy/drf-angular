'use strict';

/**
 * @ngdoc service
 * @name appwebApp.PhotoDetailFactory
 * @description
 * # PhotoDetailFactory
 * Factory in the appwebApp.
 */
angular.module('appwebApp')
  .factory('PhotoDetailFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
