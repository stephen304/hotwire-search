'use strict';

/**
 * @ngdoc service
 * @name hotwireSearchApp.alertService
 * @description
 * # alertService
 * Service in the hotwireSearchApp.
 */
angular.module('hotwireSearchApp')
  .service('alertService', function ($rootScope) {

    var prefixes = {
      danger: "Error:",
      warning: "Notice:"
    }

    this.message = null;
    this.prefix = null;
    this.class = null;
    this.dismiss = function() {
      this.message = null;
      this.prefix = null;
      this.class = null;
      $rootScope.$emit('alert-change');
    };
    this.set = function(message, messageClass) {
      this.message = message;
      this.prefix = prefixes[messageClass];
      this.class = messageClass;
      $rootScope.$emit('alert-change');
    }

    this.subscribe = function(scope, callback) {
      var handler = $rootScope.$on('alert-change', callback);
      scope.$on('$destroy', handler);
    }
  });
