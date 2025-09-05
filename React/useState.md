# useState 
used to track state of a property 
```
import {useState} from 'react'
```
We initialise our state by calling the useState inside our function component 
It accepts an intial value and returns 2 values : current and a function that updates the state 
```
//initialise at the top of function

function FavoriteColor() {
  const [color, setColor] = useState("red");
}
```
Here the 1st value 'color' is the current state <br>
2nd value 'setColor' is the function we use to update the state. <br>
Also we have initialised our default initial state to 'red'
```
Example :
<button type="button" onClick={()=>setColor("Blue")}>Blue</button>
```
- The useState hook can be used to keep track of strings , boolean , numbers , arrays , objects or even combos of these.
- Example of usage of multiple hooks :
```
import {useState} from 'react'
import {createRoot} from 'react-dom/client'
function MyCar(){
  const [brand,setBrand]=useState("BMW");
  const [model,setModel]=useState("M7-series");
  const [year,setYear]=useState("1967");
  const [color,setColor]=useState("Red");

return(
  <div>
    <h1>My {brand}</h1>
    <p> Details :  {color} , {model} from {year}</p>
  </div>
);
}
createRoot(document.getElementById('root')).render(
  <MyCar/>
);
```
We can do the exact same code but instead of multiple useState hooks we can replace it by just one hook and input a car object.
```
import {useState} from 'react'
import {createRoot} from 'react-dom/client'
function MyCar(){
  const [car,setCar]=useState({
    brand:"Ford",
    model:"Mustang",
    year:"1967",
    color:"red"
});

return(
  <h1>My {car.brand}</h1>
  <p> Details : {car.color} , {car.model} from {car.year}</p>
);
}
createRoot(document.getElementById('root')).render({
  <MyCar/>
)};
```
# Updating objects and arrays inside useState
Everytime a state is updated it is re-rendered, ie: entire state is updated. <br>
What if i only want to update 1 property ? lets say i just want to change the color of my car and keep everything else the same ?? <br>
We use the `...` js operator to get the previous state and then re-write the updates
```
const updateColor=()=>{
  setCar(previousState=>{
    return{...previousState,color:'blue'}
});
}
```
Because we need the current value of state, we pass a function into our setCar function. This function receives the previous value.
We then return an object, spreading the previousState and overwriting only the color.
