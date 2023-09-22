let answer = true;

const eqArrays = (array1, array2) => {
  if (array1.length != array2.length){
    answer = false;
  } else {
      for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
          answer = false;
        }
      }
    }
    return answer;
};

const assertArraysEqual = () => {
  if (answer === true) {
    console.log('Both arrays are equal');
  } else {
    console.log('Arrays are not equal');
  }
} 

assertArraysEqual(eqArrays([1,2,3], [1,2,3]));