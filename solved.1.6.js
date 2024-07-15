function compresString(str) {
  let result = "";
  let left = 0,
    right = 0;
    debugger;
  while (right <= str.length) {
    if (str.charAt(left) !== str.charAt(right)) {
      result += `${str.charAt(left)}${right - left === 1 ? "" : right - left}`;
      left = right;
    } else {
      right++;
    }
  }

  return result.length < str.length ? result : str;
}

console.log("aabcccccaaa", compresString("aabcccccaaa"));
console.log("abc", compresString("abc"));
console.log("aabbcc", compresString("aabbcc"));
