
// The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

// To keep things simple, the callback should only be provided one value: The item in the array. 

const takeUntil = function(array, callback) {
  let paramIndex = null
  const param = callback 
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      paramIndex = i; 
      break;
    }
  }

  return  array.slice(0, paramIndex)
}  

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
// Expected Output:

//  [ 1, 2, 5, 7, 2 ]

// [ 'I\'ve', 'been', 'to', 'Hollywood' ]