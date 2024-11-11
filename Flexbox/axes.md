# Axes
**Default Flex Direction:** Flex containers are set to row by default, arranging items horizontally (left-to-right). You can change this to column to stack items vertically (top-to-bottom).

**Axes Change with Direction:**

Main Axis: In row, the main axis is horizontal (controls width). In column, it’s vertical (controls height).
Cross Axis: Always perpendicular to the main axis—vertical in row and horizontal in column.
**Effect of flex:** 1: When using shorthand flex: 1, flex-basis defaults to 0, causing items to collapse if there’s no content. To avoid this, use flex: 1 1 auto or flex-grow: 1, allowing items to expand based on their set dimensions.

**flex-basis Context:** flex-basis aligns with the main axis—controlling width in row and height in column. Adjust this based on your layout direction.

**Block-Level Defaults:** Block elements in row often expand to full width naturally. In column, they only take up content height, which can cause layout issues if there’s no content or explicit height defined.
## Knowledge Check 
To arrange items vertically: Set flex-direction: column on the container. <br>
flex-basis in a column: Refers to the item’s height.<br>
flex-basis in a row: Refers to the item’s width.<br>
Why they differ: flex-basis aligns with the main axis, which changes with flex-direction (row = horizontal width; column = vertical height).<br>
Changing flex-direction changes the main axis and cross axis, affecting how properties like flex-basis are applied.<br>
