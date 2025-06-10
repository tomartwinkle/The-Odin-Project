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
- every js object has a prototype. The prototype is another object that the original object inherits from ie : the original object has access to all methods and properties of the prototype object 
example :
```
function Player(name, level) {
  this.name = name;
  this.level = level;
}

const player1 = new Player("Alice", 5);
const player2 = new Player("Bob", 3);

console.log(Object.getPrototypeOf(player1) === Player.prototype); // true
console.log(Object.getPrototypeOf(player2) === Player.prototype); // true
```
Why does this return true? <br><br>
Every function in JavaScript (like Player) has a built-in property called .prototype.<br>

When you use new Player(), JavaScript:<br>

Creates a new empty object.<br>

Sets the new object's [[Prototype]] (i.e., __proto__) to Player.prototype.<br>

Binds this to the new object inside the Player function.<br>

So, both player1 and player2 have their internal prototype pointing to Player.prototype.<br>
**Using Object.getPrototypeOf(obj) is just the official/safer way to access obj.__proto__.**
```
Player.prototype.sayHello = function() {
   console.log("Hello, I'm a player!");
};

player1.sayHello(); // logs "Hello, I'm a player!"
player2.sayHello(); // logs "Hello, I'm a player!"

```
Here we assigned a function for the prototype object but the player1 and player2 can access it all.

### What is the use of an object's prototype and why are we defining functions and properties in the prototype ??
1. We can define properties and functions common among all objects on the prototype to save memory.
2.  Prototypal Inheritance : player1 and player2 inherit from the prototype object that allows them to access all methods and properties defined by the prototype.
## Prototypal Inheritance

### Key Concepts
1. Prototype Chain
- Every JavaScript object has an internal link to another object called its prototype.

- This forms a chain called the prototype chain.

- If a property or method isn't found directly on the object, JavaScript looks up the prototype chain.

2. Getting the Prototype
```
Object.getPrototypeOf(player1) === Player.prototype; // true
Object.getPrototypeOf(Player.prototype) === Object.prototype; // true
```
- Each object created from a constructor has its prototype linked to the constructor's .prototype property.

- Eventually, the prototype chain ends at Object.prototype, whose prototype is null.

3. Where do methods like .valueOf() come from?
```
player1.valueOf(); // Comes from Object.prototype
```
You did not define valueOf, but it's accessible through the prototype chain.
<br>
It is defined on Object.prototype.
```
player1.hasOwnProperty('valueOf'); // false
Object.prototype.hasOwnProperty('valueOf'); // true
```
This shows that valueOf is not directly on player1, but on its prototype’s prototype.

4. The Prototype Chain Lookup
When you call a method:<br>

- Check if it's defined on the object.

- If not, check the object's prototype.

- Continue up the chain until Object.prototype.

- If still not found, return undefined.
```
Object.getPrototypeOf(Object.prototype); // null
```
### Setting Up Inheritance
### Correct Way using Object.setPrototypeOf()
html : 
```
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = function () {
  console.log(`My marker is '${this.marker}'`);
};

Object.setPrototypeOf(Player.prototype, Person.prototype);
```
Now, Player inherits from Person:
```
const player1 = new Player("Steve", "X");
player1.sayName();    // Hello, I'm Steve!
player1.getMarker();  // My marker is 'X'
```
**❌ Wrong Way: Direct Assignment**
```
Player.prototype = Person.prototype; // Don't do this!
```
# Assignment - create a Library 
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Library</title>
    <link href="styles.css" rel="stylesheet">
</head>
<body>
    <h1>Library Portal</h1>
    <header><button class="addBook">Add Book</button></header>

    <div id="inputBook" style="display: none;">
        <div class="flex-column">
            <div>
                <label for="title">Title</label>
                <input type="text" placeholder="title" id="title">
             </div>
            <div>
                 <label for="author">Author</label>
                <input type="text" placeholder="author" id="author">
            </div>
            <div>
                <label for="pages">Pages</label>
                <input type="number" placeholder="pages" id="pages">
            </div>
            <div>
                <select id="read">
                    <option value="read">Read</option>
                    <option value="not read">Not Read</option>
                </select>
            </div>
        <button id="submitBook" type="submit">Submit</button>
        </div>
    </div>
    <div class="displayBooks">
    </div>
    <script src="script.js"></script>
</body>
</html>
```
js : 
```
const library = []; // empty array to store books

function Books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function AddBook(title, author, pages, read) {
    const newBook = new Books(title, author, pages, read);
    library.push(newBook);
    displayBooks(newBook); // pass new book to display
}

function displayBooks(book) {
    const bookContainer = document.querySelector(".displayBooks");
    const card = document.createElement("div");
    card.classList.add("book-card");
    card.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Status:</strong> ${book.read}</p>
        <div class="flex-row">
        <button id="readStatus">Read</button>
        <button id="removeBook">remove</button></div>
    `;
    bookContainer.appendChild(card);
}

// Show form on button click
const addBookBtn = document.querySelector(".addBook");
addBookBtn.addEventListener("click", () => {
    document.getElementById("inputBook").style.display = "block";
});

// Handle submit
const submitBtn = document.getElementById("submitBook");
submitBtn.addEventListener("click", () => {
    document.getElementById("inputBook").style.display = "none";

    // Get values from form
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value;

    console.log("Title:", title);
    console.log("Author:", author);
    console.log("Pages:", pages);
    console.log("Read:", read);

    AddBook(title, author, pages, read);
});
const readStatus=document.querySelector(".readStatus");
//read and remove options 

```

