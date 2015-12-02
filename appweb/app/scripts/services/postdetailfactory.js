'use strict';

/**
 * @ngdoc service
 * @name appwebApp.PostDetailFactory
 * @description
 * # PostDetailFactory
 * Factory in the appwebApp.
 */
angular.module('appwebApp')
  .factory('PostDetailFactory', function () {
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
