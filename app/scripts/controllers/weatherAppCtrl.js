/**
 * Created by marconiero on 05/04/17.
 */
angular
.module('demoApp')
.controller('weatherAppCtrl', weatherAppCtrl);

function weatherAppCtrl(weatherApi, $scope) {

  var weatherAppPromise = weatherApi.weatherApp()
  console.log(weatherAppPromise);

  weatherAppPromise
    .then(weatherAppToPage)
    .catch(showError)
    .finally(hideLoader)


    function weatherAppToPage(variabile) {
      variabile = variabile.data.query.results.channel.astronomy.sunrise
      document.getElementById('sunrise').innerHTML = variabile;
    }

    function showError(error) {
      console.log(error);
    }

    function hideLoader(error) {
      console.log(error);
    }


  /*function initMap() {
    var uluru = {lat: 52.629835, lng: -1.133005};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }*/
}
