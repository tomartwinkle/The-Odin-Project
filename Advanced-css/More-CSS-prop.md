# Useful CSS Properties with Examples

---

## Background

The `background` property is a **shorthand** for multiple background-related properties:
- `background-color`
- `background-image`
- `background-position`
- `background-size`
- `background-repeat`
- `background-origin`
- `background-clip`
- `background-attachment`

You can use it to set solid colors, background images, control image position/size, and layering.

#### Example:
```css
.hero {
  background: url('image.jpg') no-repeat center/cover;
  /* equivalent to:
     background-image: url('image.jpg');
     background-repeat: no-repeat;
     background-position: center;
     background-size: cover;
  */
}
```
## Border
Border and border-radius are used to style the border of an element
```
.card {
  border: 2px solid #333;

border-radius: 10px 0 10px 0; /* top-left, top-right, bottom-right, bottom-left */
}
```
## Box-shadow
Format: offset-x offset-y blur-radius color
```
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

```
## Overflow 
It defines what happens when content overflow's an element box.
##### Values:
**visible (default):** Content spills outside
<br>
**hidden:** Extra content is clipped
<br>
**scroll:** Adds scrollbars
<br>
**auto:** Scrollbars only if needed
```
.scroll-box {
  height: 200px;
  overflow: auto;
}

```
## Opacity
Sets the transparency level of an element.
```
.overlay {
  opacity: 0.5; /* 0 is fully transparent, 1 is fully opaque */
}
```
#### Tips:
To make only the background transparent and not the content, use rgba() for background color:<br>
`background-color: rgba(0, 0, 0, 0.5);`
