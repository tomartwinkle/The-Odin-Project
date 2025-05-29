# Custom Properties 
So we can basically define our own variables and then use them however many times we want to. 
ALWAYS USE KEBAB CASE (words are separated by hyphens)
example : 
```
.error-modal{
  --color-error-text : red;
  --modal-border : 1px solid black;
  --modal-font-size : calc(2rem+5vw);
```
Here we defined our varibales within the scope of error-modal class and it will be accessible to all elements under this class. We define variables using '--'
and access them using the same also. 
```
.error-modal {
  --color-error-text: red;
  --modal-border: 1px solid black;
  --modal-font-size: calc(2rem + 5vw);

  color:var(--color-error-text);
  border:var(--modal-border);
  font-size:var(--modal-font-size);
```
We access and use these defined variables as values of properties using the var() function. 
## Fallback Values 
It's good practice to add fallback values to your custom properties incase the property isnt available or there is some issue. The var() function for this reason, takes 2 parameters.
The first parameter we’ve already gone over, which is the custom property we want to assign. The second parameter is an optional fallback value.
We can even pass in another custom property as a fallback, which can have its own fallback value as well!
```
.fallback{
  --color-text : white;

  background : var(--undefined-value , yellow);
  color:var(--color-text , black);
}
```
Here , since the background property has undefined value so we cant determine that. Hence we move to the fallback value and the background color is set to yellow. 
On the other hand, for the font color since color-text is a defined custom property and it is within the scope , it will apply and the color of the font is set to white.
```
color: var(--undeclared-again, var(--color-text, yellow));
```
This is an example of using a custom property as a fallback which has a fallback of its own.
## Scope 
The property we use must be defined within the scope of that element. 
## Root Selector
the :root selector is used when we want to use a custom property on any of the valid classes in our code.
```
:root{
  --main-color:red;
}
.cool-paragraph {
  color: var(--main-color);
}

.exciting-paragraph {
  background-color: var(--main-color);
}

```
This way we dont need to worry about defining the property again and again and making sure it's in the valid scope if we want many classes to access that property.
## Media Queries 
Media queries are a powerful feature in CSS that allow you to apply styles based on the user's device characteristics, like screen size, resolution, or theme preference.
<br>**Syntax**
```
@media(condition){
//css rules
}
```
example : 
```
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}

```
This applies the background color only when the screen width is 600px or less.<br><br>
## prefers-color-scheme
This media query checks if the user has a system-wide theme preference for light or dark mode.
```
/* Default styles (light theme) */
:root{
--background-color:#ffffff;
--text-color:#000000;
}
/* Dark mode override */
@media(prefers-color-scheme){
:root {
    --bg-color: #121212;
    --text-color: #f0f0f0;
  }
}
```
This automatically switches themes based on OS/browser settings—no JavaScript required!
### Tips 
Use media queries to build responsive designs.<br>

1. prefers-color-scheme supports only light and dark.

2. Not all browsers or devices may support every media query—check compatibility!

3. Combine with CSS custom properties for easy theme switching.

