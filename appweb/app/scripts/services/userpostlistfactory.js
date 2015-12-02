'use strict';

/**
 * @ngdoc service
 * @name appwebApp.UserPostListFactory
 * @description
 * # UserPostListFactory
 * Factory in the appwebApp.
 */
angular.module('appwebApp')
  .factory('UserPostListFactory', function () {
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
