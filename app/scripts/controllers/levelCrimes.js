/*angular
.module('demoApp')
.controller('levelCrimesCtrl', levelCrimesCtrl);

function levelCrimesCtrl($policeApi) {
      var streeLevelCrimesPromise = $policeApi.streeLevelCrimes()
      console.log(streeLevelCrimesPromise);

      streeLevelCrimesPromise
        .then(levelCrimesToPage)
        .catch(showError)
        .finally(hideLoader)

       function levelCrimesToPage(levelCrimes) {
         //ctrl.items = levelCrimes.data;
         initMap();
       }

       function showError(error) {
        console.log(error);
       }

       function hideLoader() {
          //ctrl.isLoading = false;
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
             }
}*/


