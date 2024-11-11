# Flexbox
Flexbox (Flexible Box Layout) is a CSS layout model designed to help you align and distribute space among items in a container. 
It simplifies responsive design by allowing elements to adjust and distribute space based on screen size or container size.
<br> https://www.youtube.com/watch?v=phWxA89Dy94 <br>
To use Flexbox, apply display: flex to a container element, making it a flex container. 
All direct children of this container are flex items, which are aligned along a main axis and a cross axis.
## Container Properties
**display:** flex: Defines a flex container.<br>
**flex-direction:** Sets the direction of the main axis (default is row).<br>
Options: row, row-reverse, column, column-reverse<br><br>
**justify-content:** Aligns items along the main axis.<br>
Options: flex-start, flex-end, center, space-between, space-around, space-evenly<br><br>
**align-items:** Aligns items along the cross axis.<br>
Options: flex-start, flex-end, center, stretch, baseline<br><br>
**flex-wrap:** Allows items to wrap onto multiple lines if they don’t fit on one line.<br>
Options: nowrap (default), wrap, wrap-reverse<br><br>
**align-content:** Aligns multiple lines along the cross axis when items wrap.<br>
Options: flex-start, flex-end, center, space-between, space-around, stretch<br>
## Flex-Item Properties
**flex-grow:** Controls how much a flex item can grow relative to others. <br>
Example: flex-grow: 1; (item will grow to fill available space)<br><br>
**flex-shrink:** Controls how much a flex item can shrink relative to others.<br>
Example: flex-shrink: 0; (item will not shrink)<br><br>
**flex-basis:** Sets the initial main size of a flex item before space distribution.<br>
Example: flex-basis: 200px;<br><br>
**align-self:** Allows an individual item to override the container's align-items.<br>
Options: auto, flex-start, flex-end, center, baseline, stretch<br><br>
**order :** Order property can change the order in which the child elements occur eg: if i have elements aligned as 1,2,3 and now i want element 3 to come before element 1 
i can do this using 'order: -1' for item 3 as its order is 0 by default or i can use 'order: 1' for item 1 if i want to send it to last. 
**This property is discouraged to use unless necessary as it messes the semantics of our html**
