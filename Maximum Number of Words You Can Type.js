var canBeTypedWords = function(text, brokenLetters) {
  let textArr = text.split(' ').length
  const fullText = text.split(' ')
  brokenLetters = brokenLetters.split('')
  fullText.forEach((word) => {
    for (let i = 0; i < brokenLetters.length; i++){
      let current = brokenLetters[i];
      if (word.includes(current)){
        textArr--;
        break;
      }
    }
  })
  return textArr;
};

console.log(canBeTypedWords("hello world", "ad"))
// Output: 1
// Explanation: We cannot type "world" because the 'd' key is broken.

console.log(canBeTypedWords("leet code", "lt"))
// Output: 1
// Explanation: We cannot type "world" because the 'd' key is broken.

console.log(canBeTypedWords("leet code", "e"))
// Input: text = "leet code", brokenLetters = "e"
// Output: 0
// Explanation: We cannot type either word because the 'e' key is broken.


// Break text into an array of words || make text one singular string. 
// Split broken letters into an array. 
// Use a map function to parese over each broken letter. If broken letter exits. subtract from the text array length by 1. 

