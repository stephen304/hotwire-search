'use strict';

/**
 * @ngdoc function
 * @name hotwireSearchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hotwireSearchApp
 */
angular.module('hotwireSearchApp')
  .controller('MainCtrl', function ($scope, alertService) {
    $scope.alert = {
      message: alertService.message,
      prefix: alertService.prefix,
      class: alertService.class
    };

    alertService.subscribe($scope, function alertChanged() {
      $scope.alert = {
        message: alertService.message,
        prefix: alertService.prefix,
        class: alertService.class
      };
    });

    $scope.dismiss = function() {
      alertService.dismiss();
    }


    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
