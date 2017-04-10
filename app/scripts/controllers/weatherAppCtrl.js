/**
 * Created by marconiero on 05/04/17.
 */
angular
  .module('demoApp')
  .controller('weatherAppCtrl', weatherAppCtrl);

function weatherAppCtrl(weatherApi, $scope) {


  $scope.searchCity = searchCity;
  $scope.getForecast = getForecast;


  function searchCity(){
    weatherApi
      .searchCityWoeid($scope.cityName)
      .then(weatherAppToPage)
  }

  function weatherAppToPage(response) {
    getForecast(response.data.query.results.place[0])
  }

  function getForecast(item) {
    //get forecast for woeid
    weatherApi
      .getForecast(item.woeid)
      .then(function (response) {
        //attach forecast to scope (view)
        $scope.response = response.data;
      })
  }

  function showError(error) {
    console.log(error);
  }

  function hideLoader(error) {
    console.log(error);
  }
}
