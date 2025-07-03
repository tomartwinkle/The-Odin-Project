# Introduction to states in react
## Why State Is Important in React
Imagine you're building an interactive app — like one that changes color when a user clicks a button, shows or hides menus, or fetches data from a website.
To make your app dynamic — meaning it can change over time — you need a way to remember and update information inside your components. That’s where state comes in.
## What Is "State" in React?
State = memory for a component.
<br><br>
In real life:
<br>
Think of a TV remote. When you press a button, it changes the channel or volume and remembers that change.<br>
In React, that kind of memory (like which color is selected or whether a dropdown is open) is called state.<br>
Every component in React can "remember" information by using state.

## How to Use State – useState() Hook
React gives us a tool called a hook to work with state.
```
import { useState } from 'react';

const [stateValue, setStateValue] = useState(initialValue);
```
This is called destructuring an array returned by useState(). 
<br><br>
Example:
```
const [backgroundColor, setBackgroundColor] = useState("white");
```
- backgroundColor: holds the current color
- setBackgroundColor: is a function to change it
- "white" is the default/initial color

## What Happens When You Click a Button?
Say you click a button labeled "Red":
```
<button onClick={() => setBackgroundColor("red")}>Red</button>
```
- This calls the function setBackgroundColor("red")
- React remembers this new value
- It re-renders (rebuilds) the component using the new color

## How State Works Internally – Rerendering
Whenever state or props change:

- The component is destroyed and recreated.
- But React keeps track of the latest state value.
- It then builds a new version of the component — with the new values.
This rebuild process is called a rerender.

## Virtual DOM and Reconciliation
React doesn’t change the real HTML (DOM) right away. It uses a clever system:

- React creates a virtual DOM (a lightweight copy of the real one).
- When state changes, React makes a new virtual DOM.
- Then React compares the old and new virtual DOMs.
- It updates only the parts that changed in the real DOM.

 This smart comparison process is called the **Reconciliation Algorithm.**

## What Stays, What Changes?
Even though React destroys and recreates the component when rerendering:

- State values stay intact because React remembers them between renders.

- The initial value of useState is only used the first time.

Example:
```
const [count, setCount] = useState(0);
```
Even if your component rerenders 100 times, it won’t reset to 0 every time.

It keeps the most recent value of count.

## What Are Hooks?
Hooks are special React functions starting with use.
<br>
Examples:

1. useState() — lets your component have state
2. useEffect() — lets you run code when something changes (more later!)

## Rules of Hooks

- You can only use hooks inside the top-level of a functional component
Don’t use hooks inside: if statements , for loops , functions inside functions 
