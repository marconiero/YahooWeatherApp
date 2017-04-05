/**
 * Created by marconiero on 05/04/17.
 */
angular
.module('demoApp')
.service('weatherApi', ['$http', weatherAppService])

function weatherAppService($http) {

   var endPoint = 'https://weather.yahoo.com/country/state/city-2460286/';

   return {
     weatherApp: weatherApp
   }

   function weatherApp() {
     var remoteCall = $http({
                              method: 'GET',
                              url: endPoint,
                              params: {
                                country: "United States",
                                region: " AK"
                              }
     })
   return remoteCall;
   }
}
