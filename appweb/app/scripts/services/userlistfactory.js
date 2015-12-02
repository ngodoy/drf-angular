'use strict';

/**
 * @ngdoc service
 * @name appwebApp.UserListFactory
 * @description
 * # UserListFactory
 * Factory in the appwebApp.
 */
angular.module('appwebApp')
  .factory('UserListFactory', function () {
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
