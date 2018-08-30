/*

Write a JavaScript function to chop a string into chunks of a given length. Go to the editor 

Test Data : 

console.log(string_chop('w3resource')); 
console.log(string_chop('w3resource',2)); 
console.log(string_chop('w3resource',3)); 

["w3resource"] 
["w3", "re", "so", "ur", "ce"] 
["w3r", "eso", "urc", "e"]

 */

function string_chop(x,n=0)
{
  let r=[];
  for(let i=0;i<(x.length)/3;i++)
    {
      if(n===0)
        {
          r[i]=x;
          break;
        }
      else
        {
          r[i]=x.slice((n*i),(n*(i+1)));
        }
    }
  return r; 
}

console.log(string_chop('w3resource')); 
console.log(string_chop('w3resource',2)); 
console.log(string_chop('w3resource',3));