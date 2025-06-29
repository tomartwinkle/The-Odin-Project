React is one of the most powerful Js library. 
# Setting up React environment
There are many ways like adding script tags in html or using :
- vite's react config
- Gatsby
- NextJS
We will use Vite's CLI to create a react project template.
# Vite's React Config
**creating a react app :**
1. In the VSCode terminal write the following code and make sure to use the LTS latest version or errors can occur :
```
npm create Vite@latest my-first-react-app -- --template react
```
We can replace 'my-first-react-app' with any other name
2. Then move to that project and configure npm
```
cd my-first-react-app
npm install
npm run dev
```
3. The local host will open a Vite + react app
4. Alternatively, If ur in a github repo then u can cd to that repo and then instead of project name use `.` to specify that this repo will be the current directory.
```
npm create Vite@latest . -- --template react
```
# Delving Deeper
`public` folder is where static assests related to our app go like images , icons etc.<br>
`src` folder is where all the code that runs our app go. 
<br>`main.jsx` file serves as the entry point 
```
//main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

```
- We import StrictMode and createRoot from react and react-dom packages.
- App component imported from App.jsx and css styling is imported.
- We create a root object by invoking createRoot within an element in our index.html
- we invoke render method attached to our root object etc.
