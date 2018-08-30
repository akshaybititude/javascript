/*

 Write a JavaScript function to capitalize the first letter of a string. Go to the editor 
 
 Test Data : 
 console.log(capitalize('js string exercises')); 
 
 "Js string exercises"

*/

function capitalize(x) 
{
  return x.charAt(0).toUpperCase()+x.slice(1);
}

console.log(capitalize('js string exercises'));