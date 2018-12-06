
//Function composition/pipelining

var r = require('ramda');

var ender = (ending) => (input) => input + ending;

var adore = ender(' rocks');
var announce = ender(', you all');
var exclaim = ender('!');

var rtlHype = r.compose(adore, announce, exclaim);
console.log(rtlHype('FP'));

var ltrHype = r.pipe(adore, announce, exclaim);
console.log(ltrHype('FP'));