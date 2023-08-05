/*
  Receive a string and a chard and count how many of its chars has on the string
*/

function countChar(word, char) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      count++;
    }
  }
  return count;
}


console.log(countChar("This is a text", "i"))