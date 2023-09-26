const assertEqual = require('../assertEqual') 
const tail = require('../tail')

assertEqual(tail(["Lighthouse", "Labs"]), 'Labs');