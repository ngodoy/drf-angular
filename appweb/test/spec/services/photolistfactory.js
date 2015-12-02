'use strict';

describe('Service: PhotoListFactory', function () {

  // load the service's module
  beforeEach(module('appwebApp'));

  // instantiate service
  var PhotoListFactory;
  beforeEach(inject(function (_PhotoListFactory_) {
    PhotoListFactory = _PhotoListFactory_;
  }));

  it('should do something', function () {
    expect(!!PhotoListFactory).toBe(true);
  });

});
