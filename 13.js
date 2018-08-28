/*

Write a JavaScript conditional statement to sort three numbers. 
Display an alert box to show the result.

Sample numbers : 0, -1, 4 

Output : 4, 0, -1 

*/

var a=[0,-1,4];
let temp;
for(let i=0;i<a.length;i++)
  {
    for(j=0;j<a.length;j++)
      {
        if(a[i]>a[j])
        {
          temp=a[i];
          a[i]=a[j];
          a[j]=temp;
        }
      }
    
  }
console.log(a.join());