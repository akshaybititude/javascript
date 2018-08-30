/*

Write a JavaScript function to count the occurrence of a substring in a string. Go to the editor 

Test Data : 

console.log(count("The quick brown fox jumps over the lazy dog", 'the')); 
Output : 2 

console.log(count("The quick brown fox jumps over the lazy dog", 'fox')); 
Output : 1

*/

function count(x,s)
{
  let r=x.toLowerCase().split(' ');
  let c=0;
  for(let i=0;i<x.length;i++)
    {
      if(r[i]===s)
        c++;
    }
  return c;
}

console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count("The quick brown fox jumps over the lazy dog", 'fox'));