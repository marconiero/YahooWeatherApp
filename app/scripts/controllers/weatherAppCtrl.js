/**
 * Created by marconiero on 05/04/17.
 */
angular
.module('demoApp')
.controller('weatherAppCtrl', weatherAppCtrl);

function weatherAppCtrl(weatherApi, $scope) {

  $scope.messaggio = "CIAO"

  var weatherAppPromise = weatherApi.weatherApp()
  console.log(weatherAppPromise);

  weatherAppPromise
    .then(weatherAppToPage)
    .catch(showError)
    .finally(hideLoader)

    function weatherAppToPage(weatherApp) {
      console.log(error);
    }

    function showError(error) {
      console.log(error);
    }

    function hideLoader(error) {
      console.log(error);
    }
}
