const eqArrays = (array1, array2) => {
  let answer = true;
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

module.exports = eqArrays;