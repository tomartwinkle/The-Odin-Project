# Classes
## Object constructors vs classes 
**object constructor syntax (pre ES6)** : 
```
function Book(title,author){
  this.title=title;
  this.author=author;
}
Book.prototype.info=function(){
  return `${this.title} by ${this.author}`;
};
```
**Class syntax(ES6)** : 
```
class Book{
  constructor(title,author){
    this.title=title;
    this.author=author;
  }
  info(){
    return `${this.title} by ${this.author}`;
  }
}
```
Difference: The class syntax is cleaner and easier to read but under the hood, it still uses prototype-based inheritance.
## Getters and Setters
Methods that behave like properties for getting and setting values
```
class Book{
  constructor(title,author){
    this.title=title;
    this.author=author;
  }
  getTitle(){
    return this._title;
  }
  setTitle(newTitle){
    this._title=newTitle;
  }
}
```
## Inheritance in Classes
```
class Person{
  constructor(name){
    this.name=name;
  }
  greet(){
    return `Hi ${this.name}`;
  }
}
class Player extends Person{
  constructor(name, sport){
    super(name);
    this.sport=sport;
  }
  play(){
  return `${this.name} plays ${this.sport}`;
  }
}

```
## Encapsulation - private fields and methods 
**new syntax : #**
```
class Example{
  #privateValue=62;
  #privateMethod(){
    return `secret`;
  }
  publicMethod(){
    return this.#privateValue;
  }
}
```
## Static property and methods
Belong to the class not instances (object nhi bante)
```
class MathUtil{
  static square(n){
    return n*n;
  }
}
MathUtil.square(4) //16
```
