/*
 
 Write a JavaScript function to split a string and convert it into an array of words. Go to the editor 
 
 Test Data : 
 console.log(string_to_array("Robin Singh")); 
 ["Robin", "Singh"]
 
 */

function string_to_array(x) {
  let a=x.split(" ");
  return a;
}

console.log(string_to_array("Robin Singh"));