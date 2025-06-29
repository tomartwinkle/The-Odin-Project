# What is JSX ?
JSX is a syntax extension of JS that lets us write HTML-like markup inside a JS file.
# Rules of JSX 
1. Return a single root element
When we wish to return more than 1 elements we need to enclose them inside a container that can be a div container or a react fragment like `<> ... </>`
```
//correct
function App(){
  ...
  return (
    <>
    <h1>First</h1>
    <h2>Second</h2>
    </>
  );
}

//incorrect
function App(){
  ...
  return (
    <h1>First</h1>
    <h2>Second</h2>
  );
}
```
2. Close all tags : in HTML many tags are self closing but here we need to specifically close all tags
example : `<input> would become <input />, and <li> would become <li></li>`
3. camelCase most things : So now we cant use dashes of reserved words
example : `class is a reserved word so instead we will use className and stroke-width is not camelCase instead we write strokeWidth`
