'use strict';

/**
 * @ngdoc service
 * @name hotwireSearchApp.searchService
 * @description
 * # searchService
 * Service in the hotwireSearchApp.
 */
angular.module('hotwireSearchApp')
  .service('searchService', function (cfg, $rootScope, $state, $http) {
    this.results = [];

    this.subscribe = function(scope, callback) {
      var handler = $rootScope.$on('search-result-change', callback);
      scope.$on('$destroy', handler);
    };

    this.submit = function(location, dateStart, timeStart, dateEnd, timeEnd) {
      dateStart = ('0' + (dateStart.getMonth() + 1)).slice(-2) + '/' + // Why does getMonth start at 0...
                  ('0' + dateStart.getDate()).slice(-2) + '/' +
                   dateStart.getFullYear();
      dateEnd = ('0' + (dateEnd.getMonth() + 1)).slice(-2) + '/' + // Why does getMonth start at 0...
                ('0' + dateEnd.getDate()).slice(-2) + '/' +
                 dateEnd.getFullYear();

      timeStart = ('0' + timeStart.getHours()).slice(-2) + ':' +
                  ('0' + timeStart.getMinutes()).slice(-2); // Slice to ensure minutes is 0 padded
      timeEnd = ('0' + timeEnd.getHours()).slice(-2) + ':' +
                ('0' + timeEnd.getMinutes()).slice(-2); // Slice to ensure minutes is 0 padded

      $http({
        method: 'JSONP',
        url: cfg.apiUrl + '/search/car' +
            '?apikey=' + cfg.apiKey +
            '&format=jsonp' +
            '&callback=JSON_CALLBACK' +
            '&dest=' + location +
            '&startdate=' + dateStart +
            '&enddate=' + dateEnd +
            '&pickuptime=' + timeStart +
            '&dropofftime=' + timeEnd
      }).then(function successCallback(response) {
          if (response.data.StatusCode == '0') {
            this.results = response.data.Result;
            $state.go('search.results');
          } else {
            // There be errors
            console.log(response);
          }
        }.bind(this), function errorCallback() {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
    };

  });