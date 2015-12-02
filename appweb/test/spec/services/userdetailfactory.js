'use strict';

describe('Service: UserDetailFactory', function () {

  // load the service's module
  beforeEach(module('appwebApp'));

  // instantiate service
  var UserDetailFactory;
  beforeEach(inject(function (_UserDetailFactory_) {
    UserDetailFactory = _UserDetailFactory_;
  }));

  it('should do something', function () {
    expect(!!UserDetailFactory).toBe(true);
  });

});
