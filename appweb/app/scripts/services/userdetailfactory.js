'use strict';

/**
 * @ngdoc service
 * @name appwebApp.UserDetailFactory
 * @description
 * # UserDetailFactory
 * Factory in the appwebApp.
 */
angular.module('appwebApp')
  .factory('UserDetailFactory', function () {
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
