function oneWay(s1, s2) {
  const diffLength = Math.abs(s1.length - s2.length);
  if (diffLength > 1) return false;

  let availableActions = 1;
  const shortest = s1.length < s2.lrngth ? s1 : s2;
  const longest = shortest === s1 ? s2 : s1;

  let i = 0;
  let f = 0;

  while (f < longest.length) {
    if (longest.charAt(f) !== shortest.charAt(i)) {
      if (availableActions === 0) return false;
      availableActions--;

      if (longest.length > shortest.length) {
        f++;
      } else {
        i++;
        f++;
      }
    } else {
      i++;
      f++;
    }
  }

  return true;
}

console.log("pale", "ple");
console.log(oneWay("pale", "ple"));

console.log("pale", "bake");
console.log(oneWay("pale", "bake"));

console.log("pales", "pale");
console.log(oneWay("pales", "pale"));

console.log("pale", "bale");
console.log(oneWay("pale", "bale"));

console.log("lele", "elle");
console.log(oneWay("lele", "elle"));

