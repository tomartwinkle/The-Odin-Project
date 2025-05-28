# Changing themes using custom properties 
## html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Changing themes using custom properties</title>
    <link href="styles.css"  rel="stylesheet">
</head>
<body>
    <h1>This is a learning exercise</h1>
    <div class="container">
        <p>You are now viewing this doc with the <span class="theme-name">dark</span> theme !</p>
    </div>
    <button class="theme-toggle">Toggle</button>
</body>
    <script src="script.js"></script>
</html>
```
## CSS
```css
:root.dark{
    --border-btn: 1px solid rgb(220,220,220);
    --color-base-bg:rgb(18,18,18);
    --color-base-text:rgb(240,240,240);
    --color-btn-bg:rgb(36,36,36);

}
:root.light{
    --border-btn: 1px solid rgb(36,36,36);
    --color-base-bg:rgb(240,240,240);
    --color-base-text:rgb(18,18,18);
    --color-btn-bg:rgb(220,220,220);
}
body, .theme-toggle{
    color:var(--color-base-text);
}
body{
    background-color: var(--color-base-bg);
    padding: 10px;
}
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
}
p{
    font-size: 1.5rem;
}
.theme-toggle{
    background-color: var(--color-btn-bg);
    border: var(--border-btn);
    font-size: 1.125 rem;
    padding: 10px 20px;
}
.theme-toggle:hover{
    cursor: pointer;
}
.theme-toggle:focus{
    outline: var(--border-btn);
}
```
## JS
```js
function setTheme() {
  const root = document.documentElement;
  const newTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = newTheme;
  
  document.querySelector('.theme-name').textContent = newTheme;
}

document.querySelector('.theme-toggle').addEventListener('click', setTheme)
```
