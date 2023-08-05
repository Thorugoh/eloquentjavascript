
// Make a deep equality of an object

function isObjectNotNull(element) {
  return typeof element === "object" && element !== null;
}

function deepEqual(a, b) {
  if (isObjectNotNull(a) && isObjectNotNull(b)) {
    const keysOfA = Object.keys(a);
    const keysOfB = Object.keys(b);
    for (let i = 0; i < keysOfA.length; i++) {
      const element = keysOfA[i];
      if (keysOfB[element] !== undefined) {
      }
    }
  }
}
