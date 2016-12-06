"use strict";
var Rx_1 = require('rxjs/Rx');
require('rxjs/Rx');
require('rxjs/add/operator/map');
var promise = new Promise(function (resolve, reject) {
    console.log('promise kicked off');
    setTimeout(function () {
        resolve("promise complete");
    }, 500);
});
console.log('promise handled');
promise.then(function (msg) { console.log('promise completed with ' + msg); });
var observable = new Rx_1.Observable(function (subscriber) {
    console.log('observable kicked off');
    setTimeout(function () {
        subscriber.next("first message");
    }, 500);
});
console.log('subscribing to observable');
observable.subscribe(function (msg) { console.log('subscribe called with ' + msg); });
//# sourceMappingURL=observable.js.map