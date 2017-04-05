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
    this.awesomeThings = "PIppo"
    this.isLoading = false;


    var ctrl = this;

    console.log(ctrl)

    this.sayHi = function() {
    return "Hi!";
    }

    showLoader();


    function printEmail() {
      console.log("printEmail", $scope.email);
    }


    //recupera informazioni
//    servizio.recuperaInformazioni()....metti info in vista

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

    $scope.$watch('email', printEmail)

    console.log($scope.email);

    console.log($scope.nome);

  });
