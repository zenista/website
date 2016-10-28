'use strict';

/**
 * @ngdoc overview
 * @name webappApp
 * @description
 * # webappApp
 *
 * Main module of the application.
 */
angular
  .module('webappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/contact-me', {
        templateUrl: 'views/contact-me.html',
        controller: 'ContactMeCtrl'
      })
      .when('/my-toolbox', {
        templateUrl: 'views/my-toolbox.html',
        controller: 'MyToolBoxCtrl'
      })
      .when('/testimonials', {
        templateUrl: 'views/testimonials.html',
        controller: 'TestimonialCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
