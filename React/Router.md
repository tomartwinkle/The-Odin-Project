# Router
A react router helps : 
- Create multiple pages in your single-page application
- Handle URL parameters and query strings
- Manage browser history and navigation
- Create nested routes and layouts
- Implement protected routes for authentication
- Without a router, your React application would be limited to a single page with no way to navigate between different views.
1. Install the router library `npm i react-router-dom`
2. Wrap ur app with < BrowserRouter></BrowserRouter>
```
function App(){
  return(
    <BrowserRouter>
    ...
    </BrowserRouter/>
  );
}
```
3. Create Views
Create the pages u want to route through . For example , lets create home , about and contact for now
```
//for simplicity of learning we create all 3 in one file

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}
```
4. Basic Routing
   React router has 3 main components :
   - link : Creates the navigation link that updates the url 
   - routes : a container for all route definitions 
   - route : Defines a mapping between the URL path and the component
   ```
   import {BrowserRouter, Routes, Route , Link} from 'react-router-dom'
   function Home(){'
     return <h1>Home Page</h1>;
    }

    function About() {
      return <h1>About Page</h1>;
    }

    function Contact() {
        return <h1>Contact Page</h1>;
    }
   function App(){
     return(
       <BrowserRouter>
         <nav>
             <Link to="/">Home</Link>|{" "}
             <Link to="/about">About</Link>|{" "}
             <Link to="/contact">Contact</Link>
         </nav>

         <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Routes/>
       </BrowserRouter>
     );
   }

   ```
- BrowserRouter wraps your app and enables routing functionality
- Link components create navigation links
- Routes and Route define your routing configuration
# Nested Routes 
A route inside a route helps change parts of page without reloading like a page within a page.
```
import {BrowerRouter, Link, Routes, Route} from 'react-dom-router'
function Home(){
  return(
    <H1> Home </H1>
  );
}

function Products(){
  return (
    <div>
      <h1> Products Page </h1>
      <nav>
      <Link to="/products/car">Cars</Link>|{" "}
      <Link to="/products/bike">Bikes<Link>
      </nav>
      <outlet/>
    </div>
  );
}

function CarProducts(){
  return(
    <div>
    <h1> Cars </h1>
    <ul>
      <li>Audi</li>
      <li>BMW</li>
      <li>Volvo</li>
    </ul>
  </div>
  );
}

function BikeProducts(){
  return(
    <div>
    <h1> Bikes </h1>
    <ul>
      <li>Yamaha</li>
      <li>Suzuki</li>
      <li>Repsol</li>
    </ul>
  </div>
  );
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App(){
  return(
  <BrowserRouter>
    <nav>
    <Link to="/">Home</Link>|{" "}
    <Link to="/products">Products</Link>
    <Link to="/contact">Contact</Link>
    </nav>

  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path="car" element={<CarProducts />} />
          <Route path="bike" element={<BikeProducts />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
```
1. Outlet: The <Outlet /> element in the Products component specifies where to render the child route's content.
2. Routes: The Routes element contains the routes to CarProducts and BikeProducts as child routes of the Products parent route.
3. URL Structure: The URL structure is relative to the parent route's path. For example:
- When you navigate to '/products/car', the CarProducts component is rendered.
- When you navigate to '/products/bike', the BikeProducts component is rendered.
# Style Active Links 
A special version of Link component is NavLink : This knows when the link's url is active or not 
<br>A NavLink is considered active if the current URL matches its to prop.
```
import {BrowserRouter, Link , Routes , Route, NavLink} from 'react-dom-router'
const NavLinkStyles=({isActive})=>({
    color: isActive ? '#007bff' : '#333',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App(){
  return(
    <BrowserRouter>
    <nav>
    <NavLink to="/" style={NavLinkStyles}> Home </NavLink>| {" "}
    <NavLink to="/about" style={navLinkStyles}>About</NavLink> |{" "}
    <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
    </nav>

  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}


```
# URL Parameters 
- URL parameters are variables that you can add to your route paths. They are often used to pass data between components.
- In the path http://localhost:5173/customer/Tobias, the URL parameter is Tobias.
- URL parameters let you create dynamic routes where part of the URL can change. Think of them as variables in your URL.
- React Router provides the useParams hook to access these parameters in your components.
```
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function Info() {
  const { firstname } = useParams();
  return <h1>Hello, {firstname}!</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/customer/Emil">Emil</Link> | 
        <Link to="/customer/Tobias">Tobias</Link> |
        <Link to="/customer/Linus">Linus</Link>
      </nav>

      <Routes>
        <Route path="/customer/:firstname" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}
```
:firstname in the route path is the URL parameter
If you visit /customer/Emil, you'll see "Hello, Emil"
If you visit /customer/Tobias, you'll see "Hello, Tobias"
If you visit /customer/Linus, you'll see "Hello, Linus"
