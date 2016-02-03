'use strict';

/**
 * @ngdoc overview
 * @name hotwireSearchApp
 * @description
 * # hotwireSearchApp
 *
 * Main module of the application.
 */
angular
  .module('hotwireSearchApp', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'ngAria'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/search');

     $stateProvider
      .state('search', {
        url: '/search',
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .state('search.results', {
        url: '/results',
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl'
      })
      .state('search.car', {
        url: '/:id',
        templateUrl: 'views/car.html',
        controller: 'CarCtrl'
      });
  })
  .constant('cfg', {
    apiUrl: 'https://api.hotwire.com/v1',
    apiKey: 'cuaj6ejw7dh8je7mjffawr6a',
    dateRange: 330, // Max days in the future
    defaultDuration: 7 // Default reservation duration
  });
