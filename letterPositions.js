
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
} 

const assertArraysEqual = () => {
  if (answer === true) {
    console.log('Both arrays are equal');
  } else {
    console.log('Arrays are not equal');
  }
} 

const letterPositions = (string) => {
  const result = {}; 
  const letterArray = string.split('');
  for (let i = 0; i < letterArray.length; i++) {
    if (letterArray[i] !== ' ') {
      result[letterArray[i]] ? result[letterArray[i]].push(i) : result[letterArray[i]] = [i];
    }
  }
  return result;
}; 

console.log(letterPositions('letter'))

