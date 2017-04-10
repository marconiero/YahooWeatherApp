/**
 * Created by marconiero on 05/04/17.
 */
angular
  .module('demoApp')
  .service('weatherApi', ['$http', weatherAppService])

function weatherAppService($http) {

  return {
    searchCityWoeid: searchCity,
    getForecast: getForecast
  };


  function searchCity(byName) {

    var endPoint = 'https://query.yahooapis.com/v1/public/yql?q=select%20woeid%20from%20geo.places%20where%20text%3D%22' + byName + '%22&format=json&callback=';

    var remoteCall = $http({
      method: 'GET',
      url: endPoint
    });
    return remoteCall;
  }


  function getForecast(woeid) {

    var endPoint = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D' + woeid + '&format=json&callback=';

    var remoteCall = $http({
      method: 'GET',
      url: endPoint,
      params: {
      }
    })
    return remoteCall;
  }
}

