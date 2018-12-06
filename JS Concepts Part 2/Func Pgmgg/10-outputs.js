

var ender = (ending) => (input) => input + ending;

var adore = ender(' rocks');
var announce = ender(', you all');
var exclaim = ender('!');

var hypeUp = (x) => exclaim(announce(adore(x)));

console.log(hypeUp('JS'));
console.log(hypeUp('FP'));