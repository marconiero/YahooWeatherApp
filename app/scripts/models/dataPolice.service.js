angular
.module('demoApp')
.service('$policeApi', ['$http', PoliceApiService ])

function PoliceApiService($http) {

  var endpoint = 'https://data.police.uk/api/';

  return {
    streeLevelCrimes: streeLevelCrimes
  }


  function streeLevelCrimes() {

      var remoteCall = $http({
                                     method: 'GET',
                                     url: endpoint + 'crimes-street/all-crime',
                                     params: {
                                       lat:52.629729,
                                       lng:-1.131592,
                                       date:"2013-01"
                                     }
                                   });
      /*remoteCall.then(function(response) {

          console.log(response)
          return response.data;
      })*/

      return remoteCall;

  }
}

