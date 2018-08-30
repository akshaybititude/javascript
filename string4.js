/*
 
  Write a JavaScript function to extract a specified number of characters from a string. Go to the editor 
  
  Test Data : 
  console.log(truncate_string("Robin Singh",4)); 
  "Robi"
 
 */

function truncate_string(x,s)
{
  let sub=x.substring(0,s);
  return sub;
}

console.log(truncate_string("Robin Singh",4));