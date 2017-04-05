'use strict';

/**
 * @ngdoc overview
 * @name demoApp
 * @description
 * # demoApp
 *
 * Main module of the application.
 */
angular
  .module('demoApp', [
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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      }).when('/levelCrimes', {
        templateUrl: 'views/levelCrimes.html',
        controller: 'levelCrimesCtrl',
        controllerAs: 'levelCrimes'
      }).when('/weatherApp', {
      templateUrl: 'views/weatherAppView.html',
      controller: 'weatherAppCtrl',
      controllerAs: 'weatherAppCtrl'
    })

      .otherwise({
        redirectTo: '/'
      });
  });
