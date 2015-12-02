'use strict';

describe('Service: PhotoDetailFactory', function () {

  // load the service's module
  beforeEach(module('appwebApp'));

  // instantiate service
  var PhotoDetailFactory;
  beforeEach(inject(function (_PhotoDetailFactory_) {
    PhotoDetailFactory = _PhotoDetailFactory_;
  }));

  it('should do something', function () {
    expect(!!PhotoDetailFactory).toBe(true);
  });

});
