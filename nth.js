/* 
  Receive a list and a position and return the value in the given position
*/

function nTh(list, position) {
  if (position > 0) return nTh(list.rest, position - 1);
  if (!list) return null;
  return list;
}

const list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };

console.log(nTh(list, 1));