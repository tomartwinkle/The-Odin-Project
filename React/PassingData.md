# Passing Data between components
Data is transferred in react from parent component to child component using 'props'. This transfer is unidirectional so it can only go in 1 direction ie : from parent to child. This limitation helps in reducing errors and giving a more controlled flow for transfer of data.
<br><br>
Example : Lets say we want to code components for buttons like so : 
```
function Button(){
  return(
    <button>Click me!</button>
  );
}

function Button2(){
  return(
    <button>Dont click me</button>
  );
}

export default function App(){
  return(
    <div>
      <Button/>
      <Button2/>
      <Button/>
    </div>
  );
}
```
Here we have made a component called Button() in which we are making a button element that says 'click me' and another component called Button2() that creates a button element which says 'dont click me' and then in our App component we are calling both components. However if we were to make many buttons or any thing else in this way , it would be inefficient and error prone. Hence, we make use of props.<br><br>
Same example using props : 
```
function Button(props){
  const buttonStyle={
    color : props.color ,
    fontSize : props.fontSize + 'px'
  }
  return(
    <button style={buttonStyle}>{props.text}</button>
  );
}

export default function App(){
  return(
    <Button text="Click me!" color="blue" fontSize={17}/>
    <Button text="Dont click me" color="red" fontSize={12}/>
  );
}
```
- The Button functional component now receives props as a function argument. The individual properties are then referenced within the component via props.propertyName.
- When rendering the Button components within App, the prop values are defined on each component.
- Inline styles are dynamically generated and then applied to the button element.
## Props Destructuring
A better way to write components and do data transfer using props is by destructuring the props by unpacking the props in the component arguments : 
```
function Button({text,color,fontSize}){
  const buttonStyle={
    color : color,
    fontSize : fontSize + "px"
  }
  return(
    <button style={buttonStyle}>{text}</button>
  );
}

export default function App(){
  return(
    <div>
      <Button text="Click Me!" color="blue" fontSize={12} />
      <Button text="Don't Click Me!" color="red" fontSize={12} />
      <Button text="Click Me!" color="blue" fontSize={20} />
    </div>
  );
}
```
## Default Props
You may have noticed in the above examples that there is some repetition when defining props on the Button components within App. In order to stop repeating ourselves by re-defining these common values, and to protect our application from undefined values, we can define default parameters to set default values for props
```
function Button({ text = "Click Me!", color = "blue", fontSize = 12 }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return <button style={buttonStyle}>{text}</button>;
}

export default function App() {
  return (
    <div>
      <Button />
      <Button text="Don't Click Me!" color="red" />
      <Button fontSize={20} />
    </div>
  );
}

```
## Functions as Props
In addition to passing variables through to child components as props, you can also pass through functions. Consider the following example : 
```
function Button({text="click me!",color="blue",fontSize={12},handleClick}){
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}

function App(){
  const handleButtonClick=()=>{
window.location.href = "https://www.google.com";
  };

  return (
    <div>
      <Button handleClick={handleButtonClick} />
    </div>
  );
} 
    
```
- The function handleButtonClick is defined in the parent component.
- A reference to this function is passed through as the value for the handleClick prop on the Button component.
- The function is received in Button and is called on a click event.
There are a few things to note here.

- We only pass through a reference to handleButtonClick, i.e. we do not include parenthesis when passing the function to Button. If we were to do something like handleClick={handleButtonClick()} then the function would be called as the button renders.

- Every Button calling this function will navigate to the same page. We can refactor the function and supply an argument within Button to customize this functionality.
