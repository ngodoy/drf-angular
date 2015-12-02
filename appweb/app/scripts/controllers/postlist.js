'use strict';

/**
 * @ngdoc function
 * @name appwebApp.controller:PostlistCtrl
 * @description
 * # PostlistCtrl
 * Controller of the appwebApp
 */
angular.module('appwebApp')
  .controller('PostlistCtrl',['$scope','PostListFactory', function ($scope,PostListFactory) {
        console.log(PostListFactory.query())
        $scope.Posts=PostListFactory.query()

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
