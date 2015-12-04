'use strict';

/**
 * @ngdoc function
 * @name appwebApp.controller:PostviewCtrl
 * @description
 * # PostviewCtrl
 * Controller of the appwebApp
 */
angular.module('appwebApp')
  .controller('PostviewCtrl',['$scope','PostDetailFactory','$stateParams', function ($scope,PostDetailFactory,$stateParams) {
    $scope.loadPost=function(){
        $scope.Post=PostDetailFactory.get({postId:$stateParams.id});
    };
    $scope.loadPost();
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
