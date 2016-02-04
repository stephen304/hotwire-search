'use strict';

/**
 * @ngdoc function
 * @name hotwireSearchApp.controller:CarCtrl
 * @description
 * # CarCtrl
 * Controller of the hotwireSearchApp
 */
angular.module('hotwireSearchApp')
  .controller('CarCtrl', function ($scope, $state, $stateParams, searchService) {
    $scope.car = searchService.getCar($stateParams.id);

    // If somebody jumped straight to this URL, send them to search
    // Future addition could make an API call to fetch the car they referenced
    if ($scope.car === null) {
      $state.go('search');
    }

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
