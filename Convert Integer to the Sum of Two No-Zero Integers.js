var getNoZeroIntegers = function(n) {
  let output;
  let startPoint = 1
  let remain = n - startPoint;
  while (!output){
    if (remain.toString().includes(0) || startPoint.toString().includes(0)){
      startPoint++; 
      remain = n - startPoint;
    } else {
      output = [startPoint, remain];
    }
  }
  return output
};

console.log(getNoZeroIntegers(2))
// Output: [1, 1]

console.log(getNoZeroIntegers(11))
// Output: [9, 2]

console.log(getNoZeroIntegers(1010))
// Output: [11,999]

console.log(getNoZeroIntegers(4102))
// Output: [111,3991]
