'use strict';

describe('Service: UserPostListFactory', function () {

  // load the service's module
  beforeEach(module('appwebApp'));

  // instantiate service
  var UserPostListFactory;
  beforeEach(inject(function (_UserPostListFactory_) {
    UserPostListFactory = _UserPostListFactory_;
  }));

  it('should do something', function () {
    expect(!!UserPostListFactory).toBe(true);
  });

});
