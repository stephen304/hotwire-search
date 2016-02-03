'use strict';

/**
 * @ngdoc function
 * @name hotwireSearchApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the hotwireSearchApp
 */
angular.module('hotwireSearchApp')
  .controller('ResultsCtrl', function ($scope, searchService) {
    $scope.results = searchService.results; // On init, copy the results to scope

    searchService.subscribe($scope, function updateResults() {
      $scope.results = searchService.results; // When we are notified of result change, update the scope copy
    });

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
