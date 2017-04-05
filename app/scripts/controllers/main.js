'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoApp
 */
var myApp = angular.module('demoApp')

myApp
  .controller('MainCtrl', function ($scope, $policeApi) {
    this.isLoading = false;

    var ctrl = this;

    console.log(ctrl)

    showLoader();

    var streeLevelCrimesPromise = $policeApi.streeLevelCrimes()
    console.log(streeLevelCrimesPromise);

    streeLevelCrimesPromise
      .then(levelCrimesToPage)
      .catch(showError)
      .finally(hideLoader)


     function levelCrimesToPage(levelCrimes) {
       ctrl.items = levelCrimes.data;
     }

     function showError(error) {
     }

     function hideLoader() {
        ctrl.isLoading = false;
     }

     function showLoader() {
        ctrl.isLoading = true;
     }
  });
