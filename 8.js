/*

Write a JavaScript program which accept a string as input and swap the case of each character.

For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

 */

let input="The Quick Brown Fox";

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
console.log(output.join(''));
