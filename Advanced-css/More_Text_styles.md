# More Text Styles
## System Font Stack

When you set a custom font using `font-family`, and that font isn’t installed on the user’s computer, the browser will use a **fallback**. If no fallback is provided, it defaults to the browser’s default font, which can be **unattractive or inconsistent**.

To avoid this, developers often define a **font stack** — a list of fonts to try in order.

---

### 🔹 Example: CSS-Tricks’ System Font Stack

```css
body {
  font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, 
               "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
```
## Web Fonts

Sometimes, we may want to use a font that is **not installed** on the user’s system. In such cases, we can use **web fonts**, which are loaded externally.

We can either:
- **Download** and host the font ourselves
- Or more commonly, **link it from an online font library** like [Google Fonts](https://fonts.google.com)

---

### 🔹 Two ways to use Google Fonts:

1. **Using `<link>` in the `<head>` of your HTML:**
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
```
2. **Using import tag on top of our CSS:**
```
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
```
## Self Hosted Fonts
This is the way in which we use downloaded fonts from the web. It is more reliable than 3rd party API's however , a fallback font stack is still important. 
<br> To use :  we import and use the custom font using the `@font-face` rule and then use it as any other font-family. Just make sure that the fonts you are using are browser compatible. 
```
@font-face {
  font-family: my-cool-font;
  src: url(../fonts/the-font-file.woff);
}

h1 {
  font-family: my-cool-font, sans-serif;
}
```
## Text Styles
### Font Style
If we want to make the whole header section for example, italic or bold etc. then we achieve this using the css property : `font-style:italic;`<br><br>
However if we want to emphasise a particular part of the text we use the html `<em>` tag :<br>
`<p>I <em>never</em> said he stole your money</p>`<br><br>
### Letter spacing 
It can we used to style the spacing between letters in particular fonts. 
<br>`letter-spacing: 0.5em;`
### Line height 
Adjusts the space between lines in wrapped text. 
<br>`line-height:1.5;`
### text-tranform 
Can be used to change the case of the letters in your text.
### text-shadow 
Adds shadow around the text in the selected element.
### ellipsis
## Ellipsis (Truncating Text)

This isn’t a single property, but a useful **CSS trick** to truncate overflowing text with an ellipsis (`...`) when the content is too long for its container.

---

### 🔸 Why it’s needed:
Simply overflowing text **does not automatically count** as overflow for CSS. So to make the ellipsis work, we need to use a combination of properties.

---

### 🔹 Full Snippet:

```css
.overflowing {
  white-space: nowrap;         /* Prevents the text from wrapping */
  overflow: hidden;            /* Hides any overflowing content */
  text-overflow: ellipsis;     /* Adds '...' to indicate truncated text */
}


