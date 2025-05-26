# CSS Units 
- **absolute units :** px is an absolute unit , ie: it will not be relative to the screen or other elements, it will remain fixed. <br>
- **relative units :** em and rem(root em) are relative units , ie: they change wrt to the context. rem is preferred over em. <br> 
  rem and em are usually used to specify font size but can be used for other elements as well. <br>
  if an element's font size is 16px then setting its width to 4em will make its font size 64px. <br>
  rem sets the value of the root but em sets the value of parent element which is what makes em more complex. <br>
- **viewport units :** vw and vh are the viewport width and height. They are used when something has to be sized wrt to the viewport size. 1vh means 1% of the viewport height and 1vw means 1% of the viewport width.
  ### Tips
  1. Use rem instead of vh,vw,px etc. as rem scales relative to html elements font size(16px by default) . It is consistent,scalable and easy to manage across the entire website.
2. **vmin**  
   Takes the **smaller** value of `vw` or `vh`.  
   <br>
   **Example:**  
   If the viewport is 1200px wide and 600px tall:  
   `1vmin = 1% of 600px = 6px`

3. **vmax**  
   Takes the **larger** value of `vw` or `vh`.  
   <br>
   **Example:**  
   Using the same viewport (1200px wide and 600px tall):  
   `1vmax = 1% of 1200px = 12px`
