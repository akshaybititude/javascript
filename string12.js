/*

Write a JavaScript function to uncamelize a string. Go to the editor 

Test Data : 

console.log(uncamelize('helloWorld')); 
console.log(uncamelize('helloWorld','-')); 
console.log(uncamelize('helloWorld','_')); 
"hello world" 
"hello-world" 
"hello_world"

 */

function uncamelize(x,s="")
{
  let r=[];
  let j=0;
  for(let i=0;i<x.length;i++)
    {
      
      if(x[i]===x[i].toUpperCase())
      {
        if(s.length!==0)
          {
            r[j]=s;
            j++;
          }
        else if(s==false)
          {
            r[j]=" ";
            j++;
          }
        
        r[j]=x[i].toLowerCase();
        j++;
        
      }
      else
        {
          r[j]=x[i];
          j++;
        }
    }
    return r.join('');
}

console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-')); 
console.log(uncamelize('helloWorld','_'));