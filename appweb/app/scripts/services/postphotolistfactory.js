'use strict';

/**
 * @ngdoc service
 * @name appwebApp.PostPhotoListFactory
 * @description
 * # PostPhotoListFactory
 * Factory in the appwebApp.
 */
angular.module('appwebApp')
  .factory('PostPhotoListFactory', function () {
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
