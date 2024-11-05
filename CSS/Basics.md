# CSS Basics

css stands for cascading stylesheets and its used to provide styling to our websites. 
## Basic Syntax
At the most basic level, CSS is made up of various rules. These rules are made up of a selector and a semicolon-separated list of declarations,
with each of those declarations being made up of a property–value pair.
<br>
__example__ <br>
```bash
div.bold-text { 
  font-weight: 700;
}
```
Here, div.bold-text is the selector followed by a semicolon separated declaration like { font-weight: 700; } is the declaration block in this example 
where the property is 'font-weight' and its value is '700' . <br><br>
'div' is just a basic html element and its an empty container , the div element in HTML stands for "division" or "document division."
It’s a versatile and commonly used container element that groups and organizes other HTML elements together, primarily for styling and layout purposes.

## Selectors 

 In CSS, selectors are used to "select" or target specific HTML elements so you can apply styles to them. Selectors tell the browser which elements
 you want to style in your CSS rule.<br>
 1. **Universal Selectors** <br>
 These are used to select elements of any type and hence, are called universal. The universal selector in CSS is represented by an asterisk (*)
 and is used to select all elements within a document. It’s useful when you want to apply a style across every element without specifying each one individually.
```bash
*{
color : pink;
}
```
  In this example, every element will have the 'color: pink;' style applied to it. <br>
  Uses : resetting margins and padding , applying a universal style , setting universal layout properties etc. 
<br><br>
2. **Type selectors/Elements Selectors** <br><br>
 Used to select HTML elements based on their tag name, such as p, div, h1, etc. They apply styles to all instances of a specific element type within the document.
It will select all elements of the given element type, and the syntax is just the name of the element, example : <br>
```bash
<!-- index.html -->

<div>Hello, World!</div>
<div>Hello again!</div>
<p>Hi...</p>
<div>Okay, bye.</div>

```
```bash
/* styles.css */

div {
  color: white;
}

```
so here, in the html document we have 3 div tags and a p tag. In the styles.css document we are styling just the div tag with the color white. So here
all 3 div tags will be styled. Hence, all the elements of that type are selected therefore its the element/type selector. <br>
We can also use **multiple type selectors** : <br>
```bash
h1, h2, h3 {
  font-family: Arial, sans-serif;
  color: #555;
}

```
So here all the headings h1,h2,h3 will have the same font family and color as thier styles. <br>
Similarly we can also do nested styling for example : 
```bash
div p {
margin-bottom: 10px ;
}
```
here, only the p tag elements inside the div elements will have this styling.
<br><br>
3. **Class Selectors** 
<br> <br>
Class selectors apply to all the elements inside a class and the class is the one we specify. The basic syntax is that we specify the class attribute <br.
inside the html elements tag and then in the stle.css document we write the case sensitive name of the class attribute after a period(.) followed by curly brackets 
and then specify our style requirements. 
Classes aren’t required to be specific to a particular element, so you can use the same class on as many elements as you want.

Another thing you can do with the class attribute is to add multiple classes to a single element as a space-separated list, such as class="alert-text severe-alert"
Since whitespace is used to separate class names like this, you should never use spaces for multi-worded names and should use a hyphen instead.
```bash
<--! index.html -->
<div class="button"> This is a class selector </div>
```
```bash
<--! style.css-->
.button{
   color: pink;
   background-color: blue;
  font-family: serif;
}
```
<br>
4. **ID Selectors**
<br><br>
ID selectors are used to style elements that have a specific id attribute. ID selectors are denoted by a # symbol followed by the ID name. Unlike classes, IDs are meant to be unique and applied to only one element per page.
The major difference between classes and IDs is that an element can only have one ID. It cannot be repeated on a single page and should not contain any whitespace.

```bash
<!-- index.html -->

<div id="title">This is an ID selector</div>
```
```bash
/* styles.css */

#title {
  background-color: red;
}
```
<br>

5. **Grouping Selector**
<br>
If 2 or more selectors have the same common declarations we can just group them using commas , <br>
for example :

```bash
.read{
color:pink;
background-color: blue;
}
.unread{
color: pink;
font-size: 20px;
}
```
Instead we can group them as : 
```bash
.read,.unread{
  color: pink;
}
.read{
(unique declarations)
}
.unread{
(unique declarations)
}
```
<br>

6. **Chaining Selectors**
   <br> <br>
   Another way to use selectors is to chain them as a list w/o separation ,
   Chaining selectors in CSS allows you to apply styles only when certain elements meet multiple criteria. This can include combining class selectors, ID selectors, element selectors, and pseudo-classes to increase specificity.
   This syntax basically works for chaining any combination of selectors, except for chaining more than one type selector.

## Descendant Combinator
The descendant combinator in CSS is used to apply styles to elements that are nested within other elements, regardless of their direct relationship. This combinator is represented by a space between two selectors. The second selector in the chain is the target, but it will only be styled if it’s a descendant (nested inside) of the first selector
## Properties
1. color and background color : <br>
  ```bash
p {
  /* hex example: */
  color: #1100ff;
}

p {
  /* rgb example: */
  color: rgb(100, 0, 127);
}

p {
  /* hsl example: */
  color: hsl(15, 82%, 56%);
}

  ```
2. typography basics and text align : <br>

3. image height and weight :<br>
```bash
img {
  height: auto;
  width: 500px;
}

```
