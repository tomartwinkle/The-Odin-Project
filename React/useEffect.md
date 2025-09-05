# useEffect
Allows us to perform sideEffects such as : fetching data , directly updating DOM , timers. <br>
It accepts 2 arguments and the 2nd arg is optional : <function> , <dependencies>
- Lets see a timer as an example :
```
import {useState,useEffect} from 'react'
import  { createRoot } from 'react-dom/client'

function Timer(){
  const [count,setCount]=useState(0);
  useEffect(()=>{
    setTimeout(()=>{
      setCount((count)=>count+1);
},1000);
});
return <h1>I've rendered {count} times!</h1>;
}

createRoot(document.getElementById('root')).render(
  <Time/>
);
```
**EXPLAINATION**
- `const [count,setCount]=useState(0)` : We use the useState hook to initialise a count variable to 0 and a setCount function that will update count. On each re-render react will remember the latest value of count
- useEffect runs after every render of the component.
Inside it, setTimeout schedules a function to run after 1 second (1000 ms).

That function calls setCount((count) => count + 1), which increases the count by 1.

The (count) => count + 1 form ensures React uses the latest value of count.
⚠️ But because you didn’t provide a dependency array ([]), this effect runs after every render → meaning it sets up a new timer each render. That causes the count to keep increasing very fast (not just once per second).
# Dependencies 
Now to make sure it only runs once and acts like a proper counter. We must add an array of dependency 
```
useEffect(() => {
  //Runs only on the first render
}, []);
```
We can also make sure it re renders 1st time and then when any dependency value changes 
```
useEffect(()=>{
  ....
},[props,state]);
```
Examples : 
```
import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- add empty brackets here

  return <h1>I've rendered {count} times!</h1>;
}

createRoot(document.getElementById('root')).render(
  <Timer />
);
```
This will only run once so it will output :
Ive rendered 0 times! 
(then after 1000ms)
Ive rendered 1 times!
<br><br>
```
import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Counter />
);
```
This runs the 1st time and then  everytime we increment the count dependency by clicking on the button 
# Effect Cleanup 
Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
<br>
We do this by including a return function at the end of the useEffect Hook.
```
import {useState,useEffect} from 'react'
import {createRoot} from 'react-dom/client'
function Timer(){
  const [count,setCount]=useState(0);
  useEffect(()=>{
    let timer=setTimeout(()=>{
      setCount((count)=>count+1);
  },1000);
return () => clearTimeout(timer);
},[]);

  return <h1>I've rendered {count} times!</h1>;
}

createRoot(document.getElementById('root')).render(
  <Timer />
);

```
Note : to clear the timer u have to name it 
