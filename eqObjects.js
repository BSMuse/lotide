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
