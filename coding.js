function addToZero(array) {
  if (array.length <= 1) return false;

  const stored = {};

  for (let i = 0; i < array.length; i++) {
    if (stored[array[i] * -1]) return true;
    stored[array[i]] = array[i];
  }

  return false;
}
// O(n) time

function hasUniqueChars(str) {
  let unique = new Set(str.split(""));
  return !(unique.size < str.length);
}
//  O(n) time
function isPangram(string) {
  new Set(
    string
      .toLowerCase()
      .split("")
      .filter((char) => /[a-z]/.test(char))
  ).size === 26;
}
//O(n) time
function findLongestWord(array) {
    let result = 0;

    for(let i = 0; i < array.length; i++) {
        if(array[i].length > result) result = array[i].length;
    }}
    //O(n) time
