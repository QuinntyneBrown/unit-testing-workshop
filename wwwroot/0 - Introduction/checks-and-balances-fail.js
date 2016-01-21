function safeDigest(force, scope) {

    if (force)
        scope.$digest();

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

    it("should not call digest", function () {
        var digestCalled = false;

        var mockScope = {
            $digest: function () {
                digestCalled = true;
            },
            $$phase: {},
            $root: {}
        };

        safeDigest(mockScope);

        expect(digestCalled).toEqual(false);
    });
});