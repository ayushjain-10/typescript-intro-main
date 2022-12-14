"use strict";
// These functions take a funtion as an argument. 
// Set the type these parameters
exports.__esModule = true;
exports.callMeMaybe = exports.callYouLater = void 0;
// In all of the functions below type the callback
// This function takes a callback that receives a string. 
function callYouLater(callback, time) {
    setTimeout(function () {
        callback({ input: 'What it be like?' });
    }, time);
}
exports.callYouLater = callYouLater;
function callMeMaybe(callback, probability) {
    setTimeout(function () {
        if (Math.random() * 100 < probability) {
            return callback({ success: true, probability: probability });
        }
        callback({ success: false, probability: probability });
    }, 1000);
}
exports.callMeMaybe = callMeMaybe;
