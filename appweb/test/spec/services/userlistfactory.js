'use strict';

describe('Service: UserListFactory', function () {

  // load the service's module
  beforeEach(module('appwebApp'));

  // instantiate service
  var UserListFactory;
  beforeEach(inject(function (_UserListFactory_) {
    UserListFactory = _UserListFactory_;
  }));

  it('should do something', function () {
    expect(!!UserListFactory).toBe(true);
  });

});
