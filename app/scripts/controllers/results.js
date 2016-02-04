'use strict';

/**
 * @ngdoc function
 * @name hotwireSearchApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the hotwireSearchApp
 */
angular.module('hotwireSearchApp')
  .controller('ResultsCtrl', function ($scope, searchService, alertService) {
    $scope.results = searchService.results; // On init, copy the results to scope
    if ($scope.results.length === 0) {
      alertService.set('No results!', 'warning');
    }

    searchService.subscribe($scope, function updateResults() {
      $scope.results = searchService.results; // When we are notified of result change, update the scope copy
    });

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
