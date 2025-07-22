var makeFancyString = function(s) {
  let newStringOut = "";
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    if (current === s[i + 1] && current === s[i - 1]){
      continue;
    } else {
      newStringOut += current;
    }
  }
  return newStringOut;
};