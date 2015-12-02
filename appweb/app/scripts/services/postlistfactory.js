'use strict';

/**
 * @ngdoc service
 * @name appwebApp.PostListFactory
 * @description
 * # PostListFactory
 * Factory in the appwebApp.
 */
angular.module('appwebApp')
  .factory('PostListFactory',['$resource', function($resource) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  }]);
/**
app.factory('Notes', ['$resource', function($resource) {
return $resource('/notes/:id', null,
    {
        'update': { method:'PUT' }
    });
}]);
*/
