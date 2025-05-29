# Advanced Selectors
A cleaner way to select elements without referring to their classes :
1. `>` Child Combinator
2. `+` Adjacent Sibling Combinator
3. `~` General Sibling Combinator
**Example Case**
```
<main class="parent">
  <div class="child group1">
    <div class="grand-child group1"></div>
  </div>
  <div class="child group2">
    <div class="grand-child group2"></div>
  </div>
  <div class="child group3">
    <div class="grand-child group3"></div>
  </div>
</main>

```
If i use `main div{...}` i will be selecting all child and grandchild divs in the main class using the descendant operator.
### Child Combinator
If i want to be more specific and select only the child divs i can use `>` 
```
main > div {
//this selects all the childs inside main
}

main > div > div {
//this selects all the grandchild divs inside main
}
```
Phrased another way, the child selector will select an element that is one level of indentation down.
### Adjacent Sibling Combinator
This allows us to select the first sibling of chosen element. 
```
.group1 + div{
//only the div with the classes 'child group2' will get selected. 
}

.group1 + div + div {
 /* Only the div with the classes "child group3" will get selected by this */
}
```
### General Sibling Combinator
selects all the siblings of the selected element.
### CSS Pseudo-Selectors

Before diving in, let’s clarify the difference between **pseudo-classes** and **pseudo-elements**:

- **Pseudo-classes**: Prefixed with a single colon `:`, they target elements **based on state or structure**.
- **Pseudo-elements**: Prefixed with double colons `::`, they **target parts of an element that don’t normally exist in the HTML**.


### Pseudo-Classes

Pseudo-classes give you new ways to target elements **based on user interaction or their structure** in the DOM.  
They have the same **specificity as regular classes** → `(0, 0, 1, 0)`.

Learn more about specificity here: [CSS Specificity Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

---

### Dynamic & User-Action Pseudo-Classes

These make your website feel more **interactive and alive**.

| Pseudo-Class | Description |
|--------------|-------------|
| `:focus`     | Targets the element currently selected (via click/keyboard). |
| `:hover`     | Targets elements under the mouse pointer. Great for buttons/menus. |
| `:active`    | Targets elements currently being clicked. Adds tactile feedback. |
| `:link`      | Targets all **unvisited** links. |
| `:visited`   | Targets **visited** links (e.g., turns purple by default). |

#### 🔗 Example

```css
a {
  text-decoration: underline;
}

a:link {
  color: blue;
}

a:visited {
  color: purple;
}
```
### Structural Pseudo-Classes

These help select elements based on position and hierarchy.

| **Selector**    | **Description**                                                     |
|-----------------|---------------------------------------------------------------------|
| `:root`         | Selects root of the document (`html` element in most cases)         |
| `:first-child`  | Selects the first child of a parent element                         |
| `:last-child`   | Selects the last child of a parent element                          |
| `:empty`        | Selects elements that have no child elements                        |
| `:only-child`   | Selects an element that is the only child of its parent             |
| `:nth-child(n)` | Selects the nth child of a parent (can use numbers, even, odd, etc.)|
### Psuedo Elements
Unlike pseudo-classes, pseudo-elements target virtual parts of an element, like a letter or line, or even inject new content.
<br>
🔹 Specificity: (0, 0, 0, 1) (like regular elements)

| **Psuedo element**   | **Purpose**                             |
|----------------------|-----------------------------------------|
| `::marker`           | style the bullet or number of list item |
| `::first-letter`     | style only the first letter of the text |
| `::first-line `      | style only the first line of the text   |
| `::selection `       | style text when its selected by the user|
| `::before `          | insert content before an element        |
| `::after`            | insert content after an element         |

Example : 

```
<style>
  .emojify::before {
    content: '😎 😄 🤓';
  }

  .emojify::after {
    content: '🤓 😄 😎';
  }
</style>

<body>
  <div>Let's <span class="emojify">emojify</span> this span!</div>
</body>

```

output : Let’s 😎 😄 🤓 emojify 🤓 😄 😎 this span!
##### Recap 
Pseudo-classes = Real elements in specific states <br>
Pseudo-elements = Virtual parts of elements or added content
### Attribute Selectors
Recall that an attribute is anything in the opening tag of an HTML element - such as src='picture.jpg' or href="www.theodinproject.com".
<br><br>
- [attribute] - This general selector will select anything where the given attribute exists. Its value doesn’t matter.
  
- selector[attribute] - Optionally we can combine our attribute selectors with other types of selectors, such as class or element selectors.
  
- [attribute="value"] - To get really specific, we can use = to match a specific attribute with a specific value.
Example :
```
[src]{
//targets any element with src attribute
}

img[src]{
//targets only img elements with src attributes
}

img[src="puppy.jgp"]{
//targets only the img element with the src attribute having the value of puppy.jpg
}
```
Sometimes we want to specifically select attributes and their values. Example : if i want to select all img elements having the attribute value that contains '.jpg' extentsion i can use some specific attribute selectors:
1. [attribute^="value"] - ^= Will match strings from the start.
2. [attribute$="value"] - $= Will match strings from the end.
3. [attribute*="value"] - *= The wildcard selector will match anywhere inside the string
```
[class^='aus']{
//classes are attributes too!!
this targets any class that starts with the value of 'aus'
}

[src$='.jpg']{
//will select src attributes with the .jpg extension at the end
}

[for*='ill']{
//selects any attribute that has 'ill' anywhere inside it
}

```
