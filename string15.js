/*

Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th. Go to the editor 

Test Data : 

console.log(humanize_format(1)); 
console.log(humanize_format(8)); 
console.log(humanize_format(301)); 
console.log(humanize_format(402)); 

"1st" 
"8th" 
"301st" 
"402nd"

 */

function humanize_format(x)
{
  let rem=x%10;
  if(rem===1)
    return x+"st";
  if(rem===2)
    return x+"nd";
  if(rem===3)
    return x+"rd";
  else
    return x+"th";
}


console.log(humanize_format(1)); 
console.log(humanize_format(8)); 
console.log(humanize_format(301)); 
console.log(humanize_format(402)); 
