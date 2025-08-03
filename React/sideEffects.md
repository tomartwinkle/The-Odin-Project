# Side Effects
Side effect is any interaction of a react component with the outside world beyond returning jsx, example : 
1. fetching data from a server
2. subscribing or setting timers(setInterval,setTimeout)
3. manual dom reads/writes(like measuring or scrolling)
4. sending analytics or logging
5. setting up event listeners outside react's event system
React's render path must stay pure ie: same props /state and same output but side effects break that purity so we need to use 'useEffect'.
# useEffect hook
```
import {useEffect} from 'react';
useEffect(()=>{
 //side effect runs here
  return ()=>{
  // cleanup (optional): runs before re-running effect or on unmount
  };
},[//dependencies]);
```
1. First argument: callback where you perform the side effect.
2. Return value (optional): cleanup function.
3. Second argument: dependency array controlling when effect runs
# Example - clock 
**wrong approach**
```
export default function Clock(){
  const [counter,setCounter]=useState(0);
  setInterval(()=>{
    setCounter(c=>c+1);
},1000);
return <p>{counter} seconds have passed.</p>;
}
```
This is wrong because setInterval inside render will re-render each time causing new Interval with each render
**correct approach**
```
import { useState, useEffect } from "react";
export default function Clock(){
  const [counter,setCounter]=useState(0);
  useEffect(()=>{
    const intervalId=setInterval(()=>{
      setCounter(c=>c+1);
      },1000);
  return ()=>{
    clearInterval(intervalId); //cleanup on unmount or before rerun
  };
},[]); //empty array - run only once on mount
return <p>{counter} seconds have passed.</p>;
```
# Dependency array (when effects re-run)
1. No second argument: effect runs after every render.
2. []: effect runs only once (on mount).
3. [a, b]: effect runs on mount and whenever a or b change.
```
useEffect(() => {
  // runs after every render
});

useEffect(() => {
  // runs only on mount
}, []);

useEffect(() => {
  // runs on mount and when `a` or `b` change
}, [a, b]);
```
# Cleanup Functions 
- Returned function runs:

Before the next execution of the effect (if dependencies changed) , 

Once on unmount , 

- Common for:

Clearing timers (clearInterval, clearTimeout) , 

Removing event listeners , 

Canceling subscriptions
```
useEffect(() => {
  const resource = subscribeToSomething();

  return () => {
    resource.unsubscribe();
  };
}, [/* deps */]);

```
# When not to use useEffect
checklist before using useEffect
Ask: Is there an external system or side effect I need to synchronize with? If the answer is no (pure computation, local derived value, simple event response), then you probably don’t need useEffect.

 Am I talking to an outside system? (API, timer, DOM, subscription)

 Is this something that can be computed directly from props/state instead?

 Do I need to clean up (unsubscribe, clear, remove)?

 Are dependencies correctly specified?

 Am I avoiding unnecessary reruns?

```
//example async fetch data
useEffect(() => {
  let cancelled = false;

  async function fetchData() {
    const result = await fetch("/api/data");
    if (!cancelled) {
      // update state
    }
  }

  fetchData();

  return () => {
    cancelled = true;
  };
}, []);

```
