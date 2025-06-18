# Async and Await
These are 2 keywords that help make asynchronous code read more like synchrnous code. These 2 examples show the difference : 
```
function getPerson(name){
  return server.getPeople().then(people=>{
  return people.find(person => {return person.name===name});
  });
}
```
```
async function getPerson(name){
  const people=await server.getPeople();
  const person=people.find(person => {return person.name===name});
  return person;
```
# async
It lets the server know we are declaring an asynchronous function and it is required to use await. Async returns promises and the returning in an async function means resolving a promise and if theres an error then that promise gets rejected.
Async functions are just syntactical sugar for promises.
The async keyword can also be used with any of the ways a function can be created. Said differently: it is valid to use an async function anywhere you can use a normal function.
```
//example 1
const yourAsyncFuntion = async () => {
   // do something asynchronously and return a promise
  return result;
}

//example 2
SomeArray.forEach(async item =>{
  // do something asynchronously for each item in 'anArray'
  // one could also use .map here to return an array of promises to use with 'Promise.all()'
});

//example 3
server.getPeople().then(async people => {
  people.forEach(person => {
    // do something asynchronously for each person
  });
});
```
# await 
It is like a 'pause until done' ie : it tells the js to wait until the async action finishes.
Its used to get a value from a function where we would normally use `.then()` 
Instead of calling .then() after the asynchronous function, you would assign a variable to the result using await. Then you can use the result in your code as you would in your synchronous code.
# Error Handling
Promises have the .catch() method for handling rejected promises, and since async functions just return a promise, you can call the function, and append a .catch() method to the end.
```
asyncFunctionCall().catch(err=>{
  console.log(err);
});

```
But there is another way: the try/catch block! If you want to handle the error directly inside the async function, you can use try/catch with async/await syntax. If JavaScript throws an error in the try block, the catch block code will run instead (this can also be used for synchronous code)
```
async function getPersonInfo(name){
  try{
    const people=await server.getPeople();
    const person=people.find(person => {return person.name===name});
    return person;
  }
  catch(error){
    //error handling code
  }
}

```
using giphy API using asyn await : 
```
const apikey='d2qoouQhqiR6nzPPpiQUx6OdwqiA2u25';
  const img = document.querySelector('img');
 const searchBtn=document.querySelector(".searchBtn"); 
  searchBtn.addEventListener("click",()=>{
    let search=prompt("Search topic : ");
    async function getGif(){
      const response=await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apikey}&s=${search}`, {mode: 'cors'})
      const data=await response.json();
      img.src=response.data.images.original.url;
    }
});
getGif();

```
