const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
      console.assert(actual === expected, `${actual} ! == ${expected}`) ;
  }
};

const head = (array) => {
  let answer = array[0];
  return answer;
}

assertEqual(head([5,6,7]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");