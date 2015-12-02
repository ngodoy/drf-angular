'use strict';

describe('Service: PostPhotoListFactory', function () {

  // load the service's module
  beforeEach(module('appwebApp'));

  // instantiate service
  var PostPhotoListFactory;
  beforeEach(inject(function (_PostPhotoListFactory_) {
    PostPhotoListFactory = _PostPhotoListFactory_;
  }));

  it('should do something', function () {
    expect(!!PostPhotoListFactory).toBe(true);
  });

});
