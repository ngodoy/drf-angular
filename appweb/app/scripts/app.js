'use strict';

/**
 * @ngdoc overview
 * @name appwebApp
 * @description
 * # appwebApp
 *
 * Main module of the application.
 */
angular
  .module('appwebApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($routeProvider, $stateProvider,$locationProvider) {
    /*$routeProvider
     .when('/', {
     templateUrl: 'views/main.html',
     controller: 'MainCtrl',
     controllerAs: 'main'
     })
     .when('/about', {
     templateUrl: 'views/about.html',
     controller: 'AboutCtrl',
     controllerAs: 'about'
     })
     .otherwise({
     redirectTo: '/'
     });
     */
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $stateProvider.state('main',{
      url:'/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
    }).state('about',{
      url:'/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
    }).state('posts',{
      url:'/posts',
      templateUrl: 'views/postlist.html',
      controller: 'PostlistCtrl',
    }).state('viewPost',{
      url:'/posts/:id/views',
      templateUrl:'views/post-view.html',
      controller:'PostviewCtrl'
    }).state('editPost',{
      url:'/posts/:id/edit',
      templateUrl:'views/post-edit.html',
      controller:'PosteditCtrl'
    });


  }).run(function($state){
  $state.go('main');
});
