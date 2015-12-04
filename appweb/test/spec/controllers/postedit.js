'use strict';

describe('Controller: PosteditCtrl', function () {

  // load the controller's module
  beforeEach(module('appwebApp'));

  var PosteditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PosteditCtrl = $controller('PosteditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PosteditCtrl.awesomeThings.length).toBe(3);
  });
});
