const eqObjects = (object1, object2) => {
  let answer = false;
  const objDecon = obj => {
    let deconArray = [];
    for (let key in obj) {
      deconArray.push(`${key}: ${obj[key]}`);
    }
    return deconArray;
  };
  const array1 = objDecon(object1); 
  const array2 = objDecon(object2);
  if (array1.length !== array2.length) {
    answer = false;
  } else {
    array1.forEach(item => {
      array2.includes(item) ? answer = true : answer = false;
    });
}
  return answer;
};


const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
      console.assert(actual === expected, `${inspect(actual)} !== ${inspect(expected)}`) ;
  }
};  


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
assertObjectsEqual(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject , longSleeveShirtObject); // => false
