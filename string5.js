/*

Write a JavaScript function to convert a string in abbreviated form. Go to the editor 

Test Data : 

console.log(abbrev_name("Robin Singh")); 
"Robin S."

 */

function abbrev_name(x)
{
  let r=[];
  for(let i=0;i<x.length;i++)
    {
      
      if(x[i-1]===" ")
      {
        r[i]=x[i];
        break;
      }
      else
        r[i]=x[i];
    }
    return r.join('');
}

console.log(abbrev_name("Robin Singh"));