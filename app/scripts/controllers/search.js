'use strict';

/**
 * @ngdoc function
 * @name hotwireSearchApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the hotwireSearchApp
 */
angular.module('hotwireSearchApp')
  .controller('SearchCtrl', function (cfg, $scope, searchService) {

    $scope.minDate = new Date();
    $scope.maxDate = new Date(new Date($scope.minDate.getTime()).setDate($scope.minDate.getDate() + cfg.dateRange));

    $scope.dateStart = {
      val: new Date(new Date().setDate($scope.minDate.getDate() + 1)),
      opened: false,
      open: function() {
        this.opened = true;
      }
    };
    $scope.dateEnd = {
      val: new Date(new Date().setDate($scope.minDate.getDate() + cfg.defaultDuration)),
      opened: false,
      open: function() {
        this.opened = true;
      }
    };

    var noon = new Date();
    noon.setHours(12);
    noon.setMinutes(0);
    $scope.timeStart = new Date(noon.getTime());
    $scope.timeEnd = new Date(noon.getTime());

    $scope.submit = function() {
      searchService.submit($scope.location, $scope.dateStart.val, $scope.timeStart, $scope.dateEnd.val, $scope.timeEnd);
    };

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
