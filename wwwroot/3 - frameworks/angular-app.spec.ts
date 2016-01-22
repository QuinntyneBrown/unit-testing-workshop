
describe("angularApp", function () {

    var $compile;
    var $rootScope;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('Replaces the element with the appropriate content', function () {
        var element = $compile("<app-header></app-header>")($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain("My Angular App");
    });

});