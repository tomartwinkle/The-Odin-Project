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
<br> 
