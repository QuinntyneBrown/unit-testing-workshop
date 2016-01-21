
function safeDigest(scope) {
    if (!scope.$$phase && (scope.$root && !scope.$root.$$phase))
        scope.$digest();
}

describe("safeDigest", function () {

    it("should call digest", function () {
        var digestCalled = false;

        var mockScope = {
            $digest: function () {
                digestCalled = true;
            },
            $root: {}
        };

        safeDigest(mockScope);

        expect(digestCalled).toEqual(true);
    });

});