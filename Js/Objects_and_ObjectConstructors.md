# Objects and Object constructors
object literal syntax : 
```
const myObject= {
  property: 'value',
  otherproperty: 77,
  "some property" : function(){
  .......
  }
};
```
2 ways to get info out of an object : dot and bracket notation. Dot is cleaner and more used but there are cases where we cant use dot notation like when we want to access variables or when we access a string property that has spaces in between words or a function: 
```
myObject.property //dot notation
myObject["some property"] //bracket notation

const variable='property';
myObject.variable // returns undefined cuz it tries to look for a property called variable inside the object
myObject[variable] //returns the required value cuz it is equivalent to myObject['property']
```
# Object Constructors
When you have a specific type of object that you need to duplicate like our player or inventory items, a better way to create them is using an object constructor, which is just a regular function that by convention is named with an uppercase initial letter. It looks like this : 
```
function Player(name,marker){
  this.name=name;
  this.marker=marker;
}
```
Or we can use it by the calling the function via 'new' keyword : 
```
const player=new Player('tisha','X');
console.log(player.name); //'tisha'
```
Just like with objects created using the Object Literal method, you can add functions to the object :
```
function Player(name,marker) {
  this.name=name;
  this.marker=marker;
  this.sayName=function (){
  console.log(this.name);
  }
};
const player1=new Player('tisha' ,'X');
const player2=new Player('athu' ,'O');
player1.sayName();
player2.sayName();
```
## Exercise
```
function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info=function(){
    const readStatus=this.read ? "already read" : "not read yet";
    return `${title} by ${author} , ${pages} pages, ${readStatus}`;
  }
};

const theHobbit=new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info());
```
# The Prototype 

