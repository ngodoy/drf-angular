'use strict';

describe('Service: PostListFactory', function () {

  // load the service's module
  beforeEach(module('appwebApp'));

  // instantiate service
  var PostListFactory;
  beforeEach(inject(function (_PostListFactory_) {
    PostListFactory = _PostListFactory_;
  }));

  it('should do something', function () {
    expect(!!PostListFactory).toBe(true);
  });

});
