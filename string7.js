/*

Write a JavaScript function to parameterize a string. Go to the editor

Test Data : 
console.log(string_parameterize("Robin Singh from USA.")); 
"robin-singh-from-usa"

 */

function string_parameterize(x) {
  let a=x.split(" ");
  return a.join('-');
}

console.log(string_parameterize("Robin Singh from USA.")); 