# Media Queries
Media Queries allow us to apply different styles according to the screen size of media type to make websites responsive.
## Syntax
Basic media query syntax : 
```
body{
  margin : 24px;
}

@media (max-width:600px){
  body{
    margin : 6px;
  }
}
```
- `@media` applies styles based on conditions
- `max-width:600px` applies the style to screens 600px wide or smaller.
- Use `min-width` if you need equal to or greater than screen width
- Here the margin width is 24px in general but if the screensize is 600px or smaller then it'll be 6px margin
**We can also add multiple styles inside a media query : **
```
  @media (max-width: 600px) {
  h1 {
    font-size: 18px;
  }
  nav {
    display: none;
  }
}

```
We can also stack multiple media queries if required : 
```
body {
  background: purple;
}

@media (max-width: 900px) {
  body {
    background: green;
  }
}

@media (max-width: 800px) {
  body {
    background: brown;
  }
}

@media (max-width: 700px) {
  body {
    background: pink;
  }
}

@media (max-width: 600px) {
  body {
    background: blue;
  }
}

@media (max-width: 500px) {
  body {
    background: orange;
  }
}
```
**A basic guideline for various media types :***
| Device     | Width Range    |
| ---------- | -------------- |
| Mobile     | ≤ 500px        |
| Tablets    | 500px – 1000px |
| Desktops   | ≥ 1000px       |
| Ultra-wide | ≥ 2000px       |

