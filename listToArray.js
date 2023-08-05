function listToArray(list) {
  function populateArray(list, arr) {
    arr.push(list.value);
    if (list.rest) {
      populateArray(list.rest, arr);
    }
    return arr;
  }

  return populateArray(list, []);
}

const list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };
console.log(listToArray(list));