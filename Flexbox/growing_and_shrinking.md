# Growing and Shrinking 
flex is actually a shorthand for flex-grow, flex-shrink and flex-basis.
 flex: 1 equates to: flex-grow: 1, flex-shrink: 1, flex-basis: 0.
Very often you see the flex shorthand defined with only one value. In that case, that value is applied to flex-grow.
So when we put flex: 1 on our divs, we were actually specifying a shorthand of flex: 1 1 0.
## Flex Grow 
flex-grow expects a single number as its value, and that number is used as the flex-item’s “growth factor”. When we applied flex: 1 to every div inside our container, we were telling every div to grow the same amount. The result of this is that every div ends up the exact same size.
If we instead add flex: 2 to just one of the divs, then that div would grow to 2x the size of the others.
flex-shrink is similar to flex-grow, but sets the “shrink factor” of a flex item. flex-shrink only ends up being applied if the size of all flex items is larger than their parent container. For example, if our 3 divs from above had a width declaration like: width: 100px, and .flex-container was smaller than 300px, our divs would have to shrink to fit.
## Flex Shrink
The default shrink factor is flex-shrink: 1, which means all items will shrink evenly. If you do not want an item to shrink then you can specify flex-shrink: 0;. 
It also shows the rate at which elements would shrink when we minimise a browser window but we can also put flex-shrink: 0; and it wont shrink.
## Flex-Basis
flex-basis sets the initial size of a flex item, so any sort of flex-growing or flex-shrinking starts from that baseline size. The shorthand value defaults to flex-basis: 0%. The reason we had to change it to auto in the flex-shrink example is that with the basis set to 0, those items would ignore the item’s width, and everything would shrink evenly. 
Using auto as a flex-basis tells the item to check for a width declaration (width: 250px).
### Flex-auto 
flex: auto is one of the shorthands of flex. When auto is defined as a flex keyword it is equivalent to the values of flex-grow: 1, flex-shrink: 1 and flex-basis: auto or to flex: 1 1 auto using the flex shorthand. 
Note that flex: auto is not the default value when using the flex shorthand despite the name being “auto” which may be slightly confusing at first. 
