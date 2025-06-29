# React Components
React allows us to break the UI into independant reusable chunks, these chunks are **components**.
<br>https://cdn.statically.io/gh/TheOdinProject/curriculum/91485eec76445d86b29d35894e83324e2967f2fb/react/imgs/00.png
- App : app represents our main application, it is the parent of all other components.
- Navbar : represents the navigation bar
- MainArticle : represents the component that renders our main content
- NewsletterForm : This is the form that lets the user input thier email to recieve weekly newsletter
## Create Components
Lets understand functional components (functional components are JS functions)
```
//Greeting.jsx file

function Greeting(){
  return <h1>&quot; Greetings to you &quot;</h1>;
}
```
- This is similar to a JS function and it will return JSX
- **Name of the function must be CAPITALISED.**(react components need to be capitalised)
- &quot is used to render `"` otherwise we get errors.
- We can use HTML in jsx like we used html directly in the return statement here
## Where do components live ? 
React components are independent, They live in their own separate files. However to utilise them we need to import and export. 
So lets default export Greeting and then to use it we need to import it in main.jsx
```
//Greeting.jsx file

function Greeting(){
  return <h1>&quot; Greetings to you &quot;</h1>;
}
export default Greeting;

//main.jsx

import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting/>
  </StrictMode>,
);
```
Make sure <Greeting/> is capitalised as React uses capitalisation to tell the difference between HTML tag and a react component's instance.
