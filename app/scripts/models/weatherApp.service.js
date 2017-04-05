/**
 * Created by marconiero on 05/04/17.
 */
angular
.module('demoApp')
.service('weatherApi', ['http', weatherAppService])

function weatherAppService($http) {

   var endPoint = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20' +
     'from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22greenland%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

   return {
     weatherApp: weatherApp
   }

   function weatherApp() {
     var remoteCall = $http({
                              method: 'GET',
                              url: endPoint
     })
   }

   return remoteCall;

}
