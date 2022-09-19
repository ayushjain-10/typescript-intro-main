"use strict";
exports.__esModule = true;
exports.allPeople = void 0;
var example_10_js_1 = require("./example-10.js");
var amy = new example_10_js_1.Student('Amy', 21, example_10_js_1.Cohort.junior);
var bob = new example_10_js_1["default"]('Bob', 32);
var cat = new example_10_js_1.Student('Cat', 43, example_10_js_1.Cohort.junior);
// Use the interface to put Persons and Students
// in an array of Humans. 
var allPeople = [
    amy,
    bob,
    cat
];
exports.allPeople = allPeople;
