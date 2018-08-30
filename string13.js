/*

Write a JavaScript function to concatenates a given string n times (default is 1). Go to the editor 

Test Data : 
console.log(repeat('Ha!')); 
console.log(repeat('Ha!',2)); 
console.log(repeat('Ha!',3)); 
"Ha!" 
"Ha!Ha!" 
"Ha!Ha!Ha!"

 */

function repeat(x,n)
{
  let r=[];
  if(n>0)
    {
      for(let i=0;i<n;i++)
      {
        r[i]=x;
      }
      return r.join();
    }
  else
    return x;
  
}

console.log(repeat('Ha!')); 
console.log(repeat('Ha!',2)); 
console.log(repeat('Ha!',3));