/*

Write a JavaScript conditional statement to find the sign of product of three numbers. 
Display an alert box with the specified sign. 
Go to the editor Sample numbers : 3, -7, 2 

Output : The sign is - 

*/

var arr=[3, -7, 2];
let p=1;
for(let i=0;i<arr.length;i++)
  {
    p=p*arr[i];
  }
if(p>0)
  {
    alert("The sign is +");
  }
else
  {
    alert("The sign is -");
  }