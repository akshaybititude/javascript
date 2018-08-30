/*

Write a JavaScript function to insert a string within a string at a particular position (default is 1).Go to the editor 

Test Data : 

console.log(insert('We are doing some exercises.')); 
console.log(insert('We are doing some exercises.','JavaScript ')); 
console.log(insert('We are doing some exercises.','JavaScript ',18));

"We are doing some exercises." 
"JavaScript We are doing some exercises." 
"We are doing some JavaScript exercises."

 */

function insert(x,s="",n="1")
{
  let r=[];
  let j=0;
  let k=0;
  for(let i=0;i<x.length;i++)
    {
      if(i==n-1 && s.length!==0)
        {
          r[j]=s;
          j++;
        }
      else
        {
          r[j]=x[k];
          j++;
          k++;
        }
    }
      
    return r.join('');
}

console.log(insert('We are doing some exercises.')); 
console.log(insert('We are doing some exercises.','JavaScript ')); 
console.log(insert('We are doing some exercises.','JavaScript ',18));