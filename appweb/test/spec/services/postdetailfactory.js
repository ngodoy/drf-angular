'use strict';

describe('Service: PostDetailFactory', function () {

  // load the service's module
  beforeEach(module('appwebApp'));

  // instantiate service
  var PostDetailFactory;
  beforeEach(inject(function (_PostDetailFactory_) {
    PostDetailFactory = _PostDetailFactory_;
  }));

  it('should do something', function () {
    expect(!!PostDetailFactory).toBe(true);
  });

});
