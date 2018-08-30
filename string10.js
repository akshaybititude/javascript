/*

Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. 
Go to the editor 

Test Data : 
console.log(swapcase('AaBbc')); 
"aAbBC"

 */

function swapcase(input) {
  let output=[];
  for(let i=0;i<input.length;i++)
  {
    if(input[i]===input[i].toLowerCase())
      {
        output.push(input[i].toUpperCase());
      }
    else
      {
        output.push(input[i].toLowerCase());
      }
  }
  return output.join('');
}


console.log(swapcase('AaBbc'));