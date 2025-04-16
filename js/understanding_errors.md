# Errors
-error messages have 2 parts : errorType followed by error message ( further they also give location of the error in terms of file , line , character or even a direct link)
## Types of errors 
### Syntax error : 
when the syntax is wrong 
` console.log("hello"`
error message will be in console saying  : Uncaught SyntaxError: missing ) after argument list
'SyntaxError' is the error type and following that is the error message explaining the cause of error and we also subsequently get the location of the file name followed by line that caused error 
and sometimes it gives the character at which the error occured aswell eg : <filename>:1:13 so error will be in line 1 in 13th character
### Type error : 
either if the type of return of a function doesnt match the input parameters , or 2 data types dont work together or a function that works on certain data type only (error related to data types)
```
var a="hello";
var b="world";
console.log(a.push(b));
```
this is not valid as even though push() is a function but its a function used in arrays , it is not a string method which is why we get the error message. If we rather change push() to concat() we get no error.
error message : VM523:1 Uncaught TypeError: a.push is not a function at <anonymous>:1:15
### Reference error : 
we get a reference error when we either try to access a variable that is not declared , mistype a variable or not initialise the variable or if that var is not in the scope of the function 
```
const var a;
const var b;
console.log(c);
```
error : Uncaught ReferenceError: b is not defined  at <anonymous>:1:13
## Debug 
1. understand and locate the error thru the error message
2. use console.log to debug
3. use debugger by typing : debugger;
4. use try catch method to debug errors
