# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @BSMuse/lotide`

**Require it:**

`const _ = require('@BSMuse/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters.js`: Counts the occurrences of each letter in a string.
* `countOnly.js`: Counts occurrences of specific items in an array.
* `eqArrays.js`: Checks if two arrays are equal.
* `eqObjects.js`: Checks if two objects are equal.
* `findKey.js`: Finds a key in an object based on a callback function.
* `findKeyByValue.js`: Finds a key in an object by its corresponding value.
* `head.js`: Returns the first element of an array.
* `index.js`: Main entry point of the application.
* `letterPositions.js`: Returns the positions of letters in a string.
* `map.js`: Implements the map function for arrays.
* `middle.js`: Returns the middle element(s) of an array.
* `tail.js`: Returns all elements of an array except the first one.
* `takeUntil.js`: Takes elements from an array until a specified condition is met.
* `without.js`: Removes specified elements from an array.
