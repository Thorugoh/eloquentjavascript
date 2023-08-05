/*
  Receives an array and transform it in a list
*/
function arrayToList(array) {
  let result = {};

  for (let i = array.length - 1; i >= 0; i--) {
    if (i === array.length - 1) {
      result = {
        value: array[i],
        rest: null,
      };
    } else {
      result = {
        value: array[i],
        rest: result,
      };
    }
  }

  return result;
}

console.log(arrayToList([1, 2, 3]));