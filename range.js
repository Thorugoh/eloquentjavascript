
/*
  Receive a start a end, and a step and return an array within the range using the given step
*/

function range(start, end, step = 1) {
  let result = [];
  let order = start < end ? "ascending" : "descending";

  if (order === "descending") {
    let temp = start;
    start = end;
    end = temp;
  }

  for (let i = start; i <= end; i += Math.abs(step)) {
    if (order === "descending") {
      result.unshift(i);
    } else {
      result.push(i);
    }
  }

  return result;
}

console.log(range(10, 100, -10));