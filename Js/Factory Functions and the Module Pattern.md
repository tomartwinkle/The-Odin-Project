# Factory Functions and the Module Pattern
## Scoping 
- **Global Scope** : variables are defined outside any block or function and can we accessed globally.
- **Function Scope** : using var we can define variables that can only be used within the function they are defined in.
- **Block Scope** : Using 'let' and 'const' we can define the scope of a variable only within a particular block eg : if-else or for loop etc.
Block scope is better than function scope , why ? => prevents bugs and redeclaration of variables , more predictable scoping and better for loops and closure.
## Closure 
A closure is the combination of a function and its lexical environment—meaning the function can remember and access variables from the scope in which it was created,
even after that scope has finished executing.
In simpler terms, if a function is defined inside another function, it can "remember" the variables of the outer function even after the outer function has returned.
```
function Outer(){
  let count=0;
  return function inner(){
    count ++;
    return count;
  }
}
const counter=new Outer();
counter(); //1
counter(); //2
```
Outer() defines a local variable count and returns an inner function.

When Outer() is called, it returns the inner function, and that returned function is now assigned to counter.

Even though Outer() has finished executing, the returned inner function still remembers the count variable.

This works because inner forms a closure over the count variable—it captures the environment in which it was created.
Here, counter is a function returned by Outer. Even though count was defined inside Outer, it is still accessible to inner because inner forms a closure over the count variable.
## Factory Functions vs Constructor Functions
**Constructor Functions**
```
function User(name){
  this.name=name;
}
const user1=new User("tia");
```
Constructor function is more complex , errors cud be made , required the use of 'new' to create an object and 'this' keyword as well as prototypes. So it is less recommended.
<br><br>**Factory Functions**
```
function User(name){
  let discordName="@"+name;
  return {name,discordName};
}
const user2=User("tia")
```
**These work like simple normal functions that return an object** and dont require the use of 'new' to create an object. They also support private variables due to closure property.
```
//Private Variables via Closures
function CreateUser(name){
  let reputation=0;
  return {
  getReputation=reputation;
  giveReputation=reputation++;
  };
}
```
Here using the inner function's property of closure we are able to access the reputation variable ie a private variable using the get and give methods.
## Object Shorthand and Destructuring
**object shorthand** : 
```
const name="Bob";
const user={name} //same as {name : name}
```
**Destructuring** : 
```
const obj={a:1,b:2};
const {a,b}=obj
```
Equivalent to : const a=obj.a;<br>
                const b=obj.b;<br>
Create variables a and b, and assign them the values from obj.a and obj.b respectively.
```

const arr=[10,20];
const [x,y]=arr;
```
const x = arr[0];  <br>
const y = arr[1]; <br>
## The module Pattern (IIFE)
Encapsulates private logic without polluting the global namespace
```
const calculator = (function () {
  const add = (a, b) => a + b;
  // Private: only accessible inside the IIFE

  return {
    add, // Exposed publicly
  };
})();

```
## Extending Factory Functions 
```
function createPlayer(name, level) {
  const user = createUser(name); // reuses logic from another factory
  const increaseLevel = () => level++; // private `level`, controlled access

  // combines all properties of `user` with the new `increaseLevel` function
  return Object.assign({}, user, { increaseLevel });
}

```
| Concept               | What's Happening                                                                                    |
| --------------------- | --------------------------------------------------------------------------------------------------- |
| **Factory Functions** | `createUser` and `createPlayer` are both factories that return objects.                             |
| **Composition**       | `createPlayer` uses `createUser` and adds more features (like `increaseLevel`).                     |
| **Encapsulation**     | `level` is **private** – it’s not directly exposed, only modified through a method.                 |
| **`Object.assign`**   | Combines objects — in this case, `{ ...user, increaseLevel }` into a new one. This avoids mutation. |
| **Closures**          | `increaseLevel` maintains access to `level` even after `createPlayer` has finished running.         |
