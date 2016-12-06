//import {Observable, Observer} from 'rxjs/Rx';
//import 'rxjs/Rx';
//import 'rxjs/add/operator/map'

var promise = new Promise((resolve, reject) => {
    console.log('promise kicked off');
    setTimeout(() => {
        resolve("promise complete");
    }, 500);    
}); 

console.log('handling promise');
promise.then((msg) => { console.log('promise completed with ' + msg); });

/*
var observable = new Observable((subscriber) => {
    console.log('observable kicked off');
    var token = setTimeout(() => {
        subscriber.next("first message");
    }, 500);
});

console.log('subscribing to observable');
observable.subscribe((msg) => {console.log('subscribe called with ' + msg)});

*/