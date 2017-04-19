/**
 * Created by marconiero on 05/04/17.
 */
angular
  .module('demoApp')
  .controller('weatherAppCtrl', weatherAppCtrl);

function weatherAppCtrl(weatherApi, $scope) {

  $scope.searchCity = searchCity;
  $scope.getForecast = getForecast;
  $scope.resetData = resetData;
  $scope.dateResponse = [];
  $scope.isSearching = false;
  $scope.searchList = [];

  function searchCity() {
    //l'utente ha cercato almeno una volta
    $scope.isSearching = true;
    weatherApi
      .searchCityWoeid($scope.cityName)
      .then(weatherAppToPage)
  }
  function weatherAppToPage(response) {
    $scope.noResults = response.data.query.count == 0;
    if ($scope.noResults) {
      $scope.isSearching = false;
      return;
    }
    var place;
    if (response.data.query.count === 1) {
      place = response.data.query.results.place;
    } else {
      place = response.data.query.results.place[0];
    }
    getForecast(place)
  }

  function getForecast(dateItem) {
    //get forecast for woeid
    weatherApi
      .getForecast(dateItem.woeid)
      .then(function (dateResponse) {
        $scope.noResults = dateResponse.data.query.count == 0;
        $scope.isSearching = false;
        if ($scope.noResults) {
          return;
        }
        //attach forecast to scope (view)
        var newItem = {
          description : dateResponse.data.query.results.channel.description,
          forecast : dateResponse.data.query.results.channel.item.forecast
        }
        $scope.searchList.push(newItem)
      initMap({lat: parseFloat(dateResponse.data.query.results.channel.item.lat),lng: parseFloat(dateResponse.data.query.results.channel.item.long)})
      });
  }

  function resetData() {
    $scope.searchList = null;
  }

  function initMap(city) {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: city
    });
    var marker = new google.maps.Marker({
      position: city,
      map: map
    });
  }
}
