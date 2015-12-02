'use strict';

describe('Service: ServeApi', function () {

  // load the service's module
  beforeEach(module('appwebApp'));

  // instantiate service
  var ServeApi;
  beforeEach(inject(function (_ServeApi_) {
    ServeApi = _ServeApi_;
  }));

  it('should do something', function () {
    expect(!!ServeApi).toBe(true);
  });

});
