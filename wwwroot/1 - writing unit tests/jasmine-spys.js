var doSomething = function (callback) {
    callback()
}

describe("doSomething", function () {
    
    it('should call the callback', function () {
        var spyCallback = jasmine.createSpy("mySpy");
        doSomething(spyCallback);
        expect(spyCallback).toHaveBeenCalled();
    });

});