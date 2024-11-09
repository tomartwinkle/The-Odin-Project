# The Box Model
Everything is a Box. Its important to understand the spacing and structure of elements on a webpage. Every elements that's a 'box' on a webpage consists of these
layers from the inside out and we can view it properly using the 'inspect' option. 
## Components of Box model
1. Content : Actual content like texts, images etc. <br>
2. Padding : Space inside the elements ie: spacing between content and border. <br>
3. Border : It wraps around the content and can be styled differently. <br>
4. Margin : It is the space outside the border ie: between 2 elements. <br>
## Box Model Properties in CSS
1. width and height : They measure dimensions of the content (**excluding margin,padding and border by default**)  <br>
2. Padding  : It controls the padding area and we can customise each side using padding-right , padding-top etc. Or we can just use padding: 10px 20px 10px 20px; <br>
3. Border : It controls the border area , similar to padding we can also customise border for each side using border-top , border-right or simply set it as border: 2px solid black; <br>
4. Margin : controls the margin area and again, we can either customise using margin-top etc. or the other way. 
```bash
.box {
  width: 200px;
  height: 100px;
  padding: 10px;           /* Padding around content */
  border: 2px solid blue;   /* Border around padding */
  margin: 15px;             /* Margin outside the border */
}
```
## Box Sizing
There are 2 ways to do box sizing as by default, width and height affect only the content area, which can lead to unintended layouts. We can change this using box sizing methods : <br>
1. box-sizing: content-box; (default) includes only the content's width/height.
2. box-sizing: border-box; includes padding and border in the element's total width/height, making layout more predictable.
recommend using the 2nd.
## overlapping elements 
To create overlapping elements, avoid margin and padding alone. Use positioning techniques like position: absolute or position: relative,
along with negative margins if necessary.
## Centering elements horizontally 
For block-level elements like divs, use margin: 0 auto; and ensure the element has a defined width:
```bash
.centered{
  width: 50%;
  margin: 0 auto;
}
```
  
