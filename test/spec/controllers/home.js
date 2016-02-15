'use strict';

describe('Controller: HomeCtrl', function () {

  // load the controller's module
  beforeEach(module('myApp'));

  var HomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('controller should be an object', function () {
    expect(HomeCtrl).toEqual(jasmine.any(Object));
  });
});
