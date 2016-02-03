'use strict';

/**
 * @ngdoc function
 * @name hotwireSearchApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the hotwireSearchApp
 */
angular.module('hotwireSearchApp')
  .controller('SearchCtrl', function ($scope) {

    $scope.minDate = new Date();
    $scope.maxDate = new Date().setDate($scope.minDate.getDate() + 330);

    $scope.dateStart = {
      val: new Date(),
      opened: false,
      open: function() {
        this.opened = true;
      }
    }
    $scope.dateEnd = {
      val: new Date().setDate($scope.minDate.getDate() + 7),
      opened: false,
      open: function() {
        this.opened = true;
      }
    }

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
