/*

Write a JavaScript function to hide email addresses to protect from unauthorized user. Go to the editor 

Test Data : 
console.log(protect_email("robin_singh@example.com")); 

"robin...@example.com"

 */

function protect_email(x)
{
  let r=[];
  let p;
  for(let i=0;i<x.length;i++)
    {
      
      if(i<5)
      {
        r[i]=x[i];
      }
      else if(x[i]==="@")
        {
          p=i;
          break;
        }
    }
    return r.join('')+"..."+x.slice(p);
}

console.log(protect_email("robin_singh@example.com"));