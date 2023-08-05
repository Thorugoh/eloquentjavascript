function getNextValue(list) {
  if (list.rest) return getNextValue(list.rest);
  else return null;
}