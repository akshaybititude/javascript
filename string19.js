/*

Write a JavaScript function to escape a HTML string. Go to the editor

Test Data :
console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));

Output :
"&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"

 */

    function escape_HTML(str)
{
        var newStr = str.replace(/</g, "&lt;");
        newStr = newStr.replace(/>/g, "&gt;");
        newStr = newStr.replace(/"/g, "&quot;");
        return newStr;
    }
console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));