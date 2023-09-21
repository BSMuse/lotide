const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
      console.assert(actual === expected, `${actual} ! == ${expected}`) ;
  }
}; 

const countOnly = (array, myObject) => {
  const nameCounts = {};

  for (const name of array) {
    if (myObject[name]) {
      if (nameCounts[name]) {
        nameCounts[name]++;
      } else {
        nameCounts[name] = 1;
      }
    }
  };

  return nameCounts;
}


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
]; 

const nameObject = { 
  "Jason": true, 
  "Karima": true, 
  "Fang": true, 
  "Agouhanna": false 
}; 

const result1 = countOnly(firstNames, nameObject);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

