const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
      console.assert(actual === expected, `${actual} ! == ${expected}`) ;
  }
}; 

const tail = (array) => {
  return array.slice(1).toString();
};

const result = tail(["Hello", "Lighthouse", "Labs"]).toString();
assertEqual(result, ["Lighthouse", "Labs"].toString());