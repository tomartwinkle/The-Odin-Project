# SVG - Ultimate Image saver 
SVG's are a scalable image format , short for 'Scalable Vector Graphics' . They allow us to edit images and use them such that they dont lose their graphics 
and quality when resized. <br>
## Usage : <br>
Icons <br>
Graphs/Charts <br>
Large, simple images <br>
Patterned backgrounds <br>
Applying effects to other elements via SVG filters <br>
## What are they ?
One common issue with images using traditional 'raster graphics' we face is that they are made of pixels and when we resize these images , figuring what and how 
the new pixels in the larger grid should look like is tough and we end up with a distorted and pixelated image often. <br><br>

Vector graphics on the other hand , dont use grids. <br>
They use formulas and hence , allow scalability of the image without issues related to graphics. Another interesting and useful aspect of SVG's is that they are written in 
XML formats, an HTML markup language which allows us to easily comprehend them unlike a jpeg file which is we open , appears like nonsensical characters. <br>
Example of an SVG XML code : <br>
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect x="0" y="0" width="100" height="50" />
  <circle class="svg-circle" cx="50" cy="50" r="10"/>
</svg>
```
Another benefit !! <br>
We can directly add the XML code to add the SVG image inside the HTML file and hence , edit the image using css .
## Does it have any Drawbacks ? 
Yes, sadly we can only add simple images in svg . If we want realistic or textured and complicated images we cant write so much XML and hence , we cant use SVG's there.
## Anatomy of an SVG - Behind the Scenes
Usually we wont write the code , rather just copy it or download the XML from any website , image editor , adobe etc. However , to tweak the properties we must understand how to read the XML code.
<br><br>
1. **xmlns** - stands for “XML NameSpace”. This specifies what dialect of XML you’re using. In our case, that dialect is the SVG language spec. Without it, some browsers will not render your image or will render it incorrectly.
<br><br>
2. **viewBox** - Defines the bounds of the SVG. It does a lot of different functionalities like :
   <br>Defining the frame of the image. It takes 4 values : viewBox="min-x min-y width height" <br>
   The 'min-x' and 'min-y' represent the x and y coordinates at the top left corner. <br>
   width and height represent the size of ur frame.
   When you position elements (like circles, rectangles, lines) inside your SVG, you give them coordinates — and those coordinates are relative to the viewBox you’ve set.
   So, when you set viewBox="0 0 100 100":  top-left corner is (0, 0) , bottom-right corner is (100, 100).<br>
   It also provides the aspect ratio when u scale or resize ur image.
<br><br>
3. **some elemenents** - Elements such as <circle>, <rect>, <path>, and <text> are defined by the SVG namespace. These are our basic building-blocks. Although you can make extremely complex images with SVG, they are mostly created with just a dozen or so of these basic elements
<br><br>
Along with a plathora more properties and attributes u can target using classes and Id's.
## Embedding SVG's 
2 approaches depending on how u want to place the SVG's : linked or inline <br>
Linking can be done how we usually link images using img tag in HTML or using background-img:url(/image.svg); <br>
However in linking the code is cleaner and html loads better but we cant edit the XML and hence cant unlock the full potential of the SVG but the image will still scale properly. <br>
In inline we can unlock the full potential by directly adding the code in our html but there can be slight issues if the XML is too long our code will be complicated and html might load slower.
