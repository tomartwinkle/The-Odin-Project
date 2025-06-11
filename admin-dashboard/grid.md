# Grids 
# Introduction to Grid  

## What is Grid?  
- **CSS Grid** is a layout module
- Best for **two-dimensional layouts** (rows **and** columns).
- Can also handle **one-dimensional layouts**.
- Easier to create evenly sized items and complex layouts.
- Key benefits:
  - **Simple placement** of grid items.
  - **Scalable structure** for adding rows/columns.
  - **gap** property for spacing (now also supported in Flex).

## Grid vs Flexbox  
- Both use **parent-child structures**.
- Similar properties for alignment.
- **Grid is not a replacement** for Flexbox—each has its place.
- Often **used together** for the best layout results.
## Creating a grid
```
.container{
display:grid;
}
```
# 📐 Columns, Rows, and Grid Structure  
**Intermediate HTML and CSS Course – CSS Grid**

## 📊 Defining Columns and Rows  
- Use `grid-template-columns` and `grid-template-rows` to define **grid tracks**.
- Tracks = **space between lines**, forming the basic grid structure.
- Example (2 rows x 3 columns):

```css
.container {
  display: grid;
  grid-template-columns: 50px 50px 50px;
  grid-template-rows: 50px 50px;
}
```
## Implicit and explicit grids
- Explicit Grid: Defined via grid-template-rows and grid-template-columns.

- Implicit Grid: Created automatically when content exceeds defined tracks.

Example: Add a 5th item to a 2x2 grid → it creates a new (implicit) row.
<br>
Control implicit tracks with:
<br>
grid-auto-rows
<br>
grid-auto-columns
<br>
grid-auto-flow (e.g., column to add horizontally instead of default vertical)
```
.container {
  display: grid;
  grid-template-columns: 50px 50px;
  grid-template-rows: 50px 50px;
  grid-auto-rows: 50px;
}
```
## 📏 Gap – Controlling Space Between Grid Items
gap: Shorthand for row and column gaps.
<br>
row-gap and column-gap: Set individually.
```
.container {
  display: grid;
  grid-template-columns: 100px 100px;
  grid-template-rows: 100px 100px;
  gap: 10px 20px; /* row-gap column-gap */
}
```
Add borders to visualize spacing better:
```
.item {
  border: 1px solid black;
}
```
## Wrapping Up
CSS Grid gives you powerful control over layout design.

Easily manage rows, columns, extra content, and spacing.
# Positioning Grid elements
| Term                | Description                                                    |
| ------------------- | -------------------------------------------------------------- |
| Grid Track          | A single row or column in the grid                             |
| Grid Line           | Dividing line between tracks, numbered top→bottom & left→right |
| Grid Cell           | Area formed by one row and one column                          |
| Grid Area           | Multiple cells occupied by one item                            |
| grid-column         | Shorthand for column-start and column-end                      |
| grid-row            | Shorthand for row-start and row-end                            |
| grid-area           | Can be positional (4 values) or named layout mapping           |
| grid-template-areas | Textual representation of layout using named areas             |
### Grid Lines
Grid lines are automatically created between tracks.

Lines are numbered starting from 1, from top to bottom (rows) and left to right (columns).
<br>
A 3x3 grid will have:
<br>
- Vertical grid lines: 1 to 4

- Horizontal grid lines: 1 to 4

Grid lines are used for positioning grid items.

### Grid Cells
A grid cell is the space between one row track and one column track — like a cell in a spreadsheet.

By default, each child of a grid container occupies one grid cell.
<br>
Example:
<br>
The element at grid cell A occupies:

- Between row lines 1 and 2

- Between column lines 1 and 2
## Positioning Grid Items
🔹 Longhand Syntax (Using Grid Lines)
```
grid-column-start: 1;
grid-column-end: 3;
grid-row-start: 1;
grid-row-end: 3;
```
🔹 Shorthand Syntax
```
grid-column: 1 / 3;
grid-row: 1 / 3;
```
🔹 grid-area (4 Values)
```
grid-area: row-start / column-start / row-end / column-end;
```
Example:
```
#living-room {
  grid-area: 1 / 1 / 3 / 6;
}
```
🔹 grid-area (Named Areas)
You can also assign names to each area:
```
#living-room {
  grid-area: living-room;
}
```
Then define layout with:
```
grid-template-areas:
  "living-room living-room living-room kitchen kitchen"
  "living-room living-room living-room bathroom bathroom";
```
Use . to represent empty cells:
```
grid-template-areas:
  "living-room . . . ."
  "living-room . . . .";
```
# Advanced Grid Properties
