'use strict';

/**
 * @ngdoc function
 * @name hotwireSearchApp.controller:CarCtrl
 * @description
 * # CarCtrl
 * Controller of the hotwireSearchApp
 */
angular.module('hotwireSearchApp')
  .controller('CarCtrl', function ($scope, $stateParams, searchService) {
    $scope.car = searchService.getCar($stateParams.id);

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
