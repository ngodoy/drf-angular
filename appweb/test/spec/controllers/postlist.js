'use strict';

describe('Controller: PostlistCtrl', function () {

  // load the controller's module
  beforeEach(module('appwebApp'));

  var PostlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostlistCtrl = $controller('PostlistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PostlistCtrl.awesomeThings.length).toBe(3);
  });
});
