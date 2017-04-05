angular
.module('demoApp')
.service('$policeApi', ['$http', PoliceApiService ])

function PoliceApiService($http) {

  //var endpoint = 'https://data.police.uk/api/';
  var endpoint2 = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20' +
    'from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22greenland%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

  /*return {
    streeLevelCrimes: streeLevelCrimes
  }*/



  /*function streeLevelCrimes() {

      var remoteCall = $http({
                                     method: 'GET',
                                     url: endpoint + 'crimes-street/all-crime',
                                     params: {
                                       lat:52.629729,
                                       lng:-1.131592,
                                     }
                                   });
      remoteCall.then(function(response) {

          console.log(response)
          return response.data;
      })

      //return remoteCall;*/


   return remoteCall2;
}

