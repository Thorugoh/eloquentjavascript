/*
  Receive an array and returns it in reverse order
*/


function reverseArrayInPlace(array) {
  let newArray = [];
  for (element of array) {
    newArray.unshift(element);
  }
  return newArray;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));