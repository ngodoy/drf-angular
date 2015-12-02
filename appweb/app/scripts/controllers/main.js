'use strict';

/**
 * @ngdoc function
 * @name appwebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appwebApp
 */
angular.module('appwebApp')
  .controller('MainCtrl', function (PhotoDetailFactory) {

    //console.log(PostListFactory.query())
    //console.log(PostDetailFactory.get({postId:1}))
    //console.log(PostPhotoListFactory.query({postId:1}))
    //console.log(UserListFactory.query())
    //console.log(UserDetailFactory.get({userId:"karim"}))
    //console.log(UserPostListFactory.query({userId:"karim"}))
    //console.log(UserPostListFactory.query({userId:"karim"}))
    //console.log(PhotoListFactory.query())
    //console.log(PhotoDetailFactory.get({photoId:1}))
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
