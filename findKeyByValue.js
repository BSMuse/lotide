const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
      console.assert(actual === expected, `${actual} ! == ${expected}`) ;
  }
};  

const findKeyByValue = (myObject, value) => {
  let answer = '';
   for (let key in myObject) {
    myObject[key] === value ? answer = key : undefined
   };
   return answer;
}; 

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);