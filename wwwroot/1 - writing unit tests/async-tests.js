var Calculator = function (displayElement) {
    this.$el = $(displayElement);
};

Calculator.prototype.hideResult = function (cb) {
    this.$el.fadeOut(1000,cb)
}

describe("Calculator", function () {
    var calc;

    describe('FX Tests', function () {
        var el;

        beforeEach(function () {
            el = $("<div>some content</div>");
            el.appendTo('body');
            calc = new Calculator(el);
        });

        afterEach(function () {
            el.remove();
        });

        it('should work with a visual effect', function () {
            calc.hideResult(callback);
            var callback = function () { expect(el.css("display")).toBe("none"); }
        });
    });
});