/*

Write a JavaScript function to truncates a string if it is longer than the specified number of characters. 
Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters. 
Go to the editor 

Test Data :

console.log(text_truncate('We are doing JS string exercises.')) 
console.log(text_truncate('We are doing JS string exercises.',19)) 
console.log(text_truncate('We are doing JS string exercises.',15,'!!')) 

"We are doing JS string exercises." 
"We are doing JS ..." 
"We are doing !!"

 */

function text_truncate(x,n=0,s="...")
{
  if(n===0)
    {
      return x.slice(0);
    }
  else
    return x.slice(0,n)+s; 
}

console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19)) 
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))