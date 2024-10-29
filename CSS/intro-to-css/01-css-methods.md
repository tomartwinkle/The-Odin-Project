# Methods to add CSS to HTML 
There are 3 ways to add style through CSS to any basic HTML code and hence, website : <br>
- internal
- external
- inline

## Internal 
Instead of creating a separate css file it involves adding style to the htmk file itself.It involves adding the rules inside opening and closing pair of 
style tags inside the head tag.
```bash
<head>
  <style>
    div {
      color: white;
      background-color: black;
    }

    p {
      color: red;
    }
  </style>
</head>
<body>
  ...
</body>
```
## External 
It involves creating a separate file for the CSS and linking it inside of an HTML’s opening and closing <head> tags with a void <link> element.
```bash
<!-- index.html -->

<head>
  <link rel="stylesheet" href="styles.css">
</head>
```
```bash
/* styles.css */

div {
  color: white;
  background-color: black;
}

p {
  color: red;
}
```
To link CSS to an HTML file, add a <link> element in the <head> section, using the href attribute to point to the CSS file's location (typically a relative path if both files are in the same directory) and the rel attribute to define the relationship as "stylesheet."

In the CSS file (e.g., styles.css), use selectors (like div or p) followed by curly braces to create a "declaration block." Inside this block, add declarations like color: white; and background-color: black;, where each declaration pairs a property (e.g., color) with a value (e.g., white).

Naming the CSS file as style.css or styles.css is common, but any name ending in .css works. This setup keeps HTML and CSS separate, making the HTML cleaner and allowing for easy updates across multiple pages by editing a single CSS file.
## Inline

