var product = (function () {
    var product = function() {

    }

    product.prototype.save = function () {

    }

    product.prototype.getQuantity = function () {
        return 5;
    };

    return product;

})();

describe("product", function () {

    var productInstance;

    beforeEach(function () {
        productInstance = new product();
    });

    it('should be defined', function () {
        expect(productInstance).toBeDefined();
        expect(productInstance.save).toBeDefined();
    });

    it('should spy on save', function () {

        // pointer to function
        // and replacing
        // if you call it, you are actually calling the spy
        var spy = spyOn(productInstance, 'save');

        productInstance.save();

        expect(spy).toHaveBeenCalled();
    });

    it('should spy on getQuantity', function () {

        // pointer to function
        // and replacing
        // if you call it, you are actually calling the spy
        var spy = spyOn(productInstance, 'getQuantity').and.returnValue(10);

        expect(productInstance.getQuantity()).toEqual(10);
    });

    it('should spy on getQuantity using a fake', function () {
        var spy = spyOn(productInstance, 'getQuantity').and.callFake(function () {
            console.log('returning 20');
            return 20;
        });

        expect(productInstance.getQuantity()).toEqual(20);
    });

    it('should spy on getQuantity and call through', function () {
        var spy = spyOn(productInstance, 'getQuantity').and.callThrough();
        expect(productInstance.getQuantity()).toEqual(5);
        expect(spy).toHaveBeenCalled();
    });

    it('should spy on getQuantity and throw error', function () {
        var spy = spyOn(productInstance, 'getQuantity').and.throwError("quux");
        var qty;
        try {
            qty = productInstance.getQuantity();
        } catch (e) {
            qty = 100;
        }

        expect(qty).toEqual(100);
    });

});