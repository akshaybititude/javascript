/*
 
 Write a JavaScript program to compute the sum and product of an array of integers. 
 
 */

let array=[4,8,6,2,7,9,1,3];
let sum=0;
let product=1;
for(let i=0;i<array.length;i++)
  {
    sum=sum+array[i];
    product=product*array[i];
  }
console.log(sum);
console.log(product);