const eqArrays = require('../eqArrays') 
const middle = require('../middle') 
const assertArraysEqual = require('../assertArraysEqual')


assertArraysEqual(eqArrays(middle([5,6,7]),[6]));
assertArraysEqual(eqArrays(middle(["Hello", "Lighthouse", "Labs", "Test"]), ["Lighthouse", "Labs"]));
