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
      .when('/weatherApp', {
      templateUrl: 'views/weatherAppView.html',
      controller: 'weatherAppCtrl',
      controllerAs: 'weatherApp'
    })

      .otherwise({
        redirectTo: '/'
      });
  });
