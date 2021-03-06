'use strict';

/**
 * @ngdoc service
 * @name hotwireSearchApp.searchService
 * @description
 * # searchService
 * Service in the hotwireSearchApp.
 */
angular.module('hotwireSearchApp')
  .service('searchService', function (cfg, $rootScope, $state, $http, alertService) {
    this.results = [];
    alertService.dismiss();

    this.subscribe = function(scope, callback) { // Allow service users to attach functions to the change of results
      var handler = $rootScope.$on('search-result-change', callback);
      scope.$on('$destroy', handler);
    };

    this.submit = function(location, dateStart, timeStart, dateEnd, timeEnd) {
      alertService.dismiss(); // Clear any error messages

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
          if (response.data.StatusCode === '0') { // If the request was OK
            this.results = response.data.Result; // Store the results in the service
            this.types = response.data.MetaData.CarMetaData.CarTypes;
            this.typesDict = {};
            for (var i = 0; i < this.types.length; i++) {
              this.typesDict[this.types[i].CarTypeCode] = this.types[i].CarTypeName;
            }
            for (i = 0; i < this.results.length; i++) {
              this.results[i].CarTypeName = this.typesDict[this.results[i].CarTypeCode];
            }

            $rootScope.$emit('search-result-change'); // Notify anybody watching
            $state.go('search.results'); // Switch to the search results if we aren't there already
          } else {
            // There be errors
            console.log(response);
            alertService.set(response.data.Errors.Error.ErrorMessage, 'danger');
          }
        }.bind(this), function errorCallback() {
          alertService.set('An error occurred when contacting the server!', 'danger');
        });
    };

    this.getCar = function(id) {
      for(var i = 0; i < this.results.length; i++) {
        if (this.results[i].HWRefNumber === id) {
          return this.results[i];
        }
      }
      return null;
    };

  });
