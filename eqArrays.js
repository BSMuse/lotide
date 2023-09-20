const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
      console.assert(actual === expected, `${actual} ! == ${expected}`) ;
  }
}; 

const eqArrays = (array1, array2) => {
  let answer = true 
  if (array1.length != array2.length){
    answer = false
  } else {
      for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
          answer = false
        }
      }
    }
    return answer
}

assertEqual(eqArrays([1, 2, '3'], [1, 2, 3]), true); 