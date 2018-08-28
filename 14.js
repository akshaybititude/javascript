/*

Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 

*/

var a=[12,-5, -2, -6, 0, -1,15];
let max=a[0];
for(let i=1;i<a.length;i++)
  {
    if(a[i]>max)
      {
        max=a[i];
      }
  }
console.log(max);