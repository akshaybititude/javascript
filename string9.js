/*

 Write a JavaScript function to capitalize the first letter of each word in a string. Go to the editor 
 
 Test Data : 
 
 console.log(capitalize_Words('js string exercises')); 
 "Js String Exercises"

 */

function capitalize_Words(x)
{
  let r=[];
  for(let i=0;i<x.length;i++)
    {
      if(i===0 || x[i-1]===" ")
      {
        r[i]=x[i].toUpperCase();
      }
      else
        r[i]=x[i];
    }
    return r.join('');
}

console.log(capitalize_Words('js string exercises'));