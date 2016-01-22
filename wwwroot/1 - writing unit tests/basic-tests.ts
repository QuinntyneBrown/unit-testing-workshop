/// <reference path="../../typings/tsd.d.ts" />

//http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript

var guid = () => {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

class dispatcher {
    constructor(private guid: Function) { }

    listeners: any[] = [];

    addListener(options) {
        var id = this.guid();
        this.listeners.push({
            id: id,
            actionType: options.actionType,
            callback: options.callback
        });
        return id;
    }

    removeListener(options) {
        var length = this.listeners.length;
        for (var i = 0; i < length; i++) {
            if (this.listeners[i] && this.listeners[i].id === options.id) {
                this.listeners.splice(i, 1);
                i = length;
            }
        }
    }

    emit(options) {
        for (var i = 0; i < this.listeners.length; i++) {
            if (this.listeners[i].actionType === options.actionType) {
                this.listeners[i].callback(options.options);
            }
        }
    }
}

describe("dispatcher", () => {

    var dispatcherInstance: dispatcher;

    beforeEach(() => {
        dispatcherInstance = new dispatcher(guid);
    });

    it("to be defined", () => {        
        expect(dispatcherInstance).toBeDefined();
    });

    it("to have 0 listeners", () => {
        expect(dispatcherInstance.listeners.length).toBe(0);
    });

    it("to add a listener", () => {

        dispatcherInstance.addListener({
            actionType: 0,
            callback: function () { }
        });
        expect(dispatcherInstance.listeners.length).toBe(1);
    });

    it("to return a guid", () => {
        var guid = dispatcherInstance.addListener({
            actionType: 0,
            callback: function () { }
        });
        expect(guid).toBeDefined();
    });


    it("to add and remove listener with guid", () => {
        var guid = dispatcherInstance.addListener({
            actionType: 0,
            callback: function () { }
        });

        expect(dispatcherInstance.listeners.length).toBe(1);

        dispatcherInstance.removeListener({ id: guid });

        expect(dispatcherInstance.listeners.length).toBe(0);
    });

    it("to emit with callback being triggerer", () => {
        var callbackCalled = false;

        expect(callbackCalled).toBe(false);

        var guid = dispatcherInstance.addListener({
            actionType: 0,
            callback: function () {
                callbackCalled = true;
            }
        });

        expect(dispatcherInstance.listeners.length).toBe(1);

        dispatcherInstance.emit({ actionType: 0 });

        expect(callbackCalled).toBe(true);
    });

});