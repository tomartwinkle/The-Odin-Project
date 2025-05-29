# 🧮 CSS Units

CSS uses a variety of units to express **lengths**, **sizes**, and **positions**.

---

## 1. **Absolute Units**

These are fixed and not responsive.  
Examples include:

- `px` – pixels (most commonly used absolute unit)
- `pt` – points (used in print)
- `cm`, `mm`, `in` – centimeters, millimeters, inches

### ❗ Downsides:
- Not scalable
- Poor accessibility on different screen sizes

---

## 2. **Relative Units**

These adapt to screen size or parent element and are **responsive-friendly**.

### 📏 Common Relative Units:

### a. `em`
- Relative to the **font-size of the parent** element.
- `2em` = 2× parent’s font-size

### b. `rem`
- Relative to the **root element’s** (`html`) font-size.
- `1rem` = default browser font-size (usually 16px)

> ✅ **Why use rem over px/em?**  
Rem ensures **consistency** across all components regardless of nesting, and it's more **predictable** than `em`, which depends on its parent.  
Rem also scales better for **accessibility** (when the user adjusts root font size).

### c. `%`  
- Relative to the **parent** container’s size (width/height).

---

## 3. **Viewport Units**

Viewport = the visible portion of the browser window.

### a. `vw`  
- 1vw = 1% of the viewport width

### b. `vh`  
- 1vh = 1% of the viewport height

### c. `vmin`  
- Takes the **smaller** value of `vw` or `vh`

#### 📌 Example:
If the viewport is **1200px wide** and **600px tall**:  
`1vmin = 1% of 600px = 6px`

### d. `vmax`  
- Takes the **larger** value of `vw` or `vh`

#### 📌 Example:
Using the same viewport:  
`1vmax = 1% of 1200px = 12px`

---

## 💡 Best Practices: Choosing the Right Unit

| Use Case             | Suggested Unit   | Reason                                          |
|----------------------|------------------|--------------------------------------------------|
| Font Sizes           | `rem`            | Consistent & scalable with root size            |
| Element Sizing       | `%`, `rem`, `vw` | Flexible and responsive                         |
| Spacing (margin/pad) | `rem`, `em`      | Scales with typography                          |
| Fullscreen Sections  | `vh`, `vw`       | Matches viewport dimensions                     |
| Avoid                | `px` (for layout) | Not responsive, breaks on small screens         |

---

## 🎯 Extra Tip: Use `calc()` with units

Combine units for more flexible design:

```css
.hero {
  height: calc(100vh - 60px);
}
