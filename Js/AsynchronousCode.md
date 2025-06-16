# Asynchronous Code
Since JavaScript is the language of the web, there are some functions that by necessity are going to take a decent amount of time to complete, such as fetching data from a server to display on your site. For this reason, JavaScript includes support for asynchronous functions, or to put it another way, functions that can happen in the background while the rest of your code executes
## Callbacks
One of the ways to support asynchronous functions is using a callback function ie : **a function that is called inside another function**
```
mydiv.AddEventListener("click",function(){
....
});
```
In this example the function AddEventListener takes a callback function and calls its when the mydiv element is clicked.<br>
However its not recommended to use callbacks when we want to chain many different functions as that often leads us into callback hell. 
## Promises
Promises are another way to deal with asynchronous code. Promise is an object that might produce a value at some point in the future.
Lets say getData is a function that fetches some data and returns it as an object.
```
const getData = function() {
  // go fetch data from some API...
  // clean it up a bit and return it as an object:
  return data
}
```
The issue with this example is that it takes some time to fetch the data, but unless we tell our code that, it assumes that everything in the function happens essentially instantly. So, if we try to do this:
```
//issue 
const myData = getData()
const pieceOfData = myData['whatever']
```
We’re going to run into trouble because when we try to extract pieceOfData out of the returned data, the function getData() will most likely still be fetching, so myData will not be the expected data, but will be undefined. Sad.

We need some way to solve this problem, and tell our code to wait until the data is done fetching to continue. Promises solve this issue.
```
const myData = getData() // if this is refactored to return a Promise...

myData.then(function(data){ // .then() tells it to wait until the promise is resolved
  const pieceOfData = data['whatever'] // and THEN run the function inside
})
```
