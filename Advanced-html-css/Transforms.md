# Transforms 
Transforms are done to add animated effects 
# 2D Transforms
rotate , skew , scale , translate 
### Rotate
```
.element{
  tranform : rotate();
}
```
examples of such usecases : 
```
.rotate-by-deg {
  transform: rotate(45deg);
}

.rotate-by-rad {
  transform: rotate(-1rad);
}

.rotate-by-turn {
  transform: rotate(0.3turn);
}
```
### Skew 
```
.element{
  transform : skewX();
  transform : skewY();
  transform : skew();
```
use cases : 
```
.skewX {
  transform: skewX(45deg);
}

.skewY {
  transform: skewY(-0.5rad);
}

.skewXY {
  transform: skew(45deg, -0.5rad);
}

.skew {
  /* single value behaves the same as skewX */
  transform: skew(45deg);
}
```
## Scale 

```
.element{
  transform : scaleX();
  transform : scaleY();
  transform : scale();
```
use cases : 
```
.scaleX {
  transform: scaleX(0.25);
}

.scaleY {
  transform: scaleY(1.5);
}

.scaleXY {
  transform: scale(0.25, 1.5);
}

.scale {
  transform: scale(0.5);
}
```
### Translate 
```
.element {
  transform: translateX();
  transform: translateY();
  transform: translate();
}

```
Translate ships an element to required coordinates
# Chaining multiple transforms 
```
.element{
  transform : rotate(45deg) translate(200%);
}
```
# 3D Transforms 
It has rotate , translate and scale as well but now a perspective() function is added. 
## Perspective
This is the transform function value to set the distance from the user to the z=0 plane
Essentially, by setting a perspective value, we are telling the object to render as if we were viewing it from a specific distance on the z-axis.

**Unlike other transform function values, perspective must be declared first (leftmost) when there are multiple transform function values.**
```
.element{
  transform : perspective();
}
```
use cases : 
```
.element {
  transform: rotateX();
  transform: rotateY();
  transform: rotateZ();
  transform: rotate3d();
}

```
Similarly in all these tranform function values, now z axis and 3d properties have been added.
<br>Example :
- transform : translateZ()
- transform : translate3d()
- transform : rotateZ()
- etc.
# Benefits of transforms
In order to understand why the transform property is great, you have to be aware of CSS triggers. You can learn about it in The Pixel Pipeline section from Google’s Web Fundamentals.

The key benefit of using transform is that it occurs during composition. This makes it cheaper to use compared to many other CSS properties. You can see what triggers are executed with each CSS property in this table of CSS triggers.

Another benefit of transform is that it can be hardware-accelerated via a device’s GPU (you don’t have to understand how a GPU works but it is good to be aware of the term and what it means). This benefit is more prominent when it comes to transitions and animations which you will learn about in the following lessons.
