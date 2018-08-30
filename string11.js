/*

Write a JavaScript function to convert a string into camel case.Go to the editor 

Test Data : 

console.log(camelize("JavaScript Exercises")); 
console.log(camelize("JavaScript exercises")); 
console.log(camelize("JavaScriptExercises")); 

"JavaScriptExercises" 
"JavaScriptExercises" 
"JavaScriptExercises"

 */

function camelize(x)
{
  let r=[];
  let j=0;
  for(let i=0;i<x.length;i++)
    {
      
      if(x[i-1]===" ")
      {
        r[i]=x[i].toUpperCase();
        i++;
      }  
      if(x[i]===" ")
        {
          
        }
      else
        {
          r[i]=x[i];
        }
    }
    return r.join('');
}

console.log(camelize("JavaScript Exercises")); 
console.log(camelize("JavaScript exercises")); 
console.log(camelize("JavaScriptExercises"));