/*
  Add value to start of the list
*/
function prepend(element, list) {
  return { value: element, rest: list };
}

const list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };
console.log(prepend(4, list));