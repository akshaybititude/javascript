/*

Write a JavaScript function that can pad (left, right) a string to get to a determined length. Go to the editor 

Test Data : 

console.log(formatted_string('0000',123,'l')); 
console.log(formatted_string('00000000',123,'')); 

Output : 

"0123" 
"12300000"

 */

function formatted_string(x,s,n='r')
{
  let r=[];
  s=s.toString();
  if(n==='l')
  {
    r=x.slice(0,x.length-s.length)+s;
  }
  else
  {
    r=s+x.slice(s.length);
  }
  return r; 
}

console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));