'use strict';

describe('Controller: CarCtrl', function () {

  // load the controller's module
  beforeEach(module('hotwireSearchApp'));

  var CarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CarCtrl = $controller('CarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CarCtrl.awesomeThings.length).toBe(3);
  });
});
