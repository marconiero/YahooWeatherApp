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

  function getForecast(dateItem) {
    //get forecast for woeid
    weatherApi
      .getForecast(dateItem.woeid)
      .then(function (dateResponse) {
        //attach forecast to scope (view)
          $scope.dateResponse = dateResponse.data.query.results.channel.item.condition.date
      })
  }


  function showError(error) {
    window.alert(error);
  }

  function hideLoader(error) {
    console.log(error);
  }
}
