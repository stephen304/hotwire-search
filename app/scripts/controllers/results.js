'use strict';

/**
 * @ngdoc function
 * @name hotwireSearchApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the hotwireSearchApp
 */
angular.module('hotwireSearchApp')
  .controller('ResultsCtrl', function (searchService) {
    // console.log(searchService.results);
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
