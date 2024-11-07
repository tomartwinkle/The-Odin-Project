# The Cascade
The Cascade of CSS is what determines which rules will apply to our html document and it depends on some factors, 3 such factors are : <br>
1. specificity <br>
2. Inheritance <br>
3. Rule order<br>
## Specificity
A CSS declaration that is more specific will take precedence over less specific ones. <br>
Inline Styles are the most specific and external styling is the least.<br.
Furthermore, specificity comes into play when there are conflicting declarations for an element like a tie breaker, and in that case we follow the specificity order:
<br>
ID > Class > Type <br>
When there is no declaration with a selector of higher specificity,
a rule with a greater number of selectors of the same type will take precedence over another rule with fewer selectors of the same type.
EXAMPLE
``` bash
<!-- index.html -->

<div class="main">
  <div class="list subsection">Red text</div>
</div>

```
```bash
/* rule 1 */
.subsection {
  color: blue;
}

/* rule 2 */
.main .list {
  color: red;
}

```
Here both use class selectors but the 2nd rule gains precedance as it uses more class selectors hence, is more specific hence the color red will be used.
<br>EXAMPLE 2
```bash
<!-- index.html -->

<div class="main">
  <div class="list" id="subsection">Red text on yellow background</div>
</div>
```
```bash
/* rule 1 */
#subsection {
  background-color: yellow;
  color: blue;
}

/* rule 2 */
.main #subsection {
 color: red;
}
```
here ID is more specific than class but now we see rule 1 has ID selector but rule 2 has ID and Class. Since neither rule is using a more specific selector than the other. The cascade then checks the number of each selector type.
Both rules have only one ID selector, but rule 2 has a class selector in addition to the ID selector, so rule 2 has a higher specificity.<br><br>
**NOTE**
<br>
When comparing selectors, you may come across special symbols for the universal selector (*) as well as combinators (+, ~, >, and an empty space). These symbols do not add any specificity in and of themselves.
<br>
```bash
/* rule 1 */
.class.second-class {
  font-size: 12px;
}

/* rule 2 */
.class .second-class {
  font-size: 24px;
}
```
Here rule one shows chaining selector (no space) and rule 2 shows descendant combinator(space) but neither affects specificity hence they have equal specificity.
```bash
/* rule 1 */
.class.second-class {
  font-size: 12px;
}

/* rule 2 */
.class > .second-class {
  font-size: 24px;
}
```
The additional '>' symbol is added now which is basically the child combinator but still , the specificity is the same. <br>
Universal selector also has no specificity value , EXAMPLE :
```bash
/* rule 1 */
* {
  color: black;
}

/* rule 2 */
h1 {
  color: orange;
}
```
Here rule 2 is more specific as its a type selector which does have the least specificity but since * has no specificity , rule 2 applies. 
## Inheritance
Inheritance refers to certain CSS properties that, when applied to an element, are inherited by that element’s descendants, even if we don’t explicitly write a rule for those descendants. Typography-based properties (color, font-size, font-family, etc.) are usually inherited, while most other properties aren’t.
<br>
The exception to this is when directly targeting an element, as this always beats inheritance:<br>
```bash
<!-- index.html -->

<div id="parent">
  <div class="child"></div>
</div>
```
```bash
/* styles.css */

#parent {
  color: red;
}

.child {
  color: blue;
}
```
Despite the parent element having a higher specificity with an ID, the child element would have the color: blue style applied since that declaration directly targets it, while color: red from the parent is only inherited.
## Rule Order
This is used as a final verdict when even after everything applied there is still conflicts for an elements regarding different declarations. <br>
**Whichever rule was last defined is the winner**

