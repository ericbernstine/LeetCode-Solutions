var canConstruct = function(ransomNote, magazine) {
  // Create map function
  const createMap = (map, str) => {
    for (let x in str){
      let value = str[x]
      if (map.has(value)){
        map.set(value, map.get(value) + 1)
      } else {
        map.set(value, 1)
      }
    }
  }
  let noteMap = new Map();
  let magMap = new Map();
  createMap(noteMap, ransomNote)
  createMap(magMap, magazine)
  // Create maps based on the ransomNote and Magazine
  for (const [value, key] of noteMap){
    // set some values to make comparisons more digestiable
    const count = key
    const letter = value
    const magCount = magMap.get(letter)
    const magLetter = magMap.has(letter)
    console.log(` Mag Letter: ${magLetter}`)
    // If the magazine does not have the current letter we are checking for in the ransomNote we return false, OR If the count of the letters in ransomNote is larger than the count in magazine we return false. 
    // Essentially we want to check if ransomNote is a subset of magazine. 
    if (magLetter == false || count > magCount){
      return false
    }
  }
  return true
};

console.log(canConstruct("a", "b"))
// Output: false

console.log(canConstruct("aa", "ab"))
// Output: false

console.log(canConstruct("aa", "aab"))
// Output: True

// Notes v.1
// This does not appear to be a 1:1 to one check. so long as Magazine has the letters to create ransomNote we can return true. they do not have to be the same length or contain all the same letters. As long as ransomNote can be built from magazine. We do however need the correct count of letters from magazine as "ab" cannot make "aa"
// To do this, we'll create a map of each string. 
// If magazine has the value of ransomNote -> continue
// If magazine has a ransomNote has the same or less count (value) than magazine -> continue. 
// If either one of these checks fail -> return false. 
// Use a for of loop instead of forEach to return early.