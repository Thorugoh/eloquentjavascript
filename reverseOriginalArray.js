// Receive an array and reverse it

function reverseArray(array) {
  let swapPosition = array.lenght - 1;

  for (let i = 0; i < array.length; i++) {
    if (i < swapPosition) {
      let temp = array[i];
      array[i] = array[swapPosition];
      array[swapPosition] = temp;

      swapPosition--;
    }
  }

  return array;
}

const array = [1, 2, 3, 4, 5, 6, 8, 9, 10];
reverseArray(array);
console.log(array);