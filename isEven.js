// get isEven withou using % (recursion)
function isEven(num) {
  const absNum = Math.abs(num);
  if (absNum === 0) return true;
  if (absNum === 1) return false;
  return isEven(absNum - 2);
}

console.log(isEven(5));