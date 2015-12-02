'use strict';

/**
 * @ngdoc service
 * @name appwebApp.PhotoListFactory
 * @description
 * # PhotoListFactory
 * Factory in the appwebApp.
 */
angular.module('appwebApp')
  .factory('PhotoListFactory', function () {
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
