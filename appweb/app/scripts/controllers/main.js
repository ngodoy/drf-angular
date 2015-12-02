'use strict';

/**
 * @ngdoc function
 * @name appwebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appwebApp
 */
angular.module('appwebApp')
  .controller('MainCtrl', function (PostListFactory) {

    console.log(PostListFactory.query())
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
