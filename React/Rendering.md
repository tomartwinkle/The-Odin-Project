# Rendering Techniques
We are now learning how to display multiple items and how to show or hide things based on conditions in JSX.
# Rendering a list element in JSX
Lets say we need to create a component that lists multiple animals : 
```
function App(){
  return (
    <div>
      <ul>
        <li>Lion</li>
        <li>Cow</li>
        <li>Snake</li>
        <li>Lizard</li>
      </ul>
    </div>
  );
}
```
Now a better way to organise this code will be by utilising react's ability to automatically render arrays. This will also be useful in the case when we want to later on add or remove an element or if we have a long long list. 
```
function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        {animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    </div>
  );
}

```
- Here we are first creating an array of animals and this way we can add as many as we'd like and it's more organised. 
- Then we return an unlinked list where each list item is defined using animals.map((animal)=>{...});
- animals.map lists all the animals in the array and we are now selecting 1 animal at a time out of it and then returning it as a list.
- The key in the list element is used when we want to add or remove any element, its like an identity for it. 
## Breaking it into components
Its better to make smaller reusable components instead of everything in one place. 
```
function ListItem(props){
  return <li> {props.animal} </li>;
}
function List{
  return(
    <div>
      <ul>
        {
          props.animals.map((animal)=>{return <ListItem key={animal} animal={animal}/>;})
        }
      </ul>
    </div>
  );
}
function App(){
  const animals=["Lion" , "Cow" , "Snake" , "Lizard"];
  return (
    <div>
      <h1> Animals : </h1>
      <List animals={animals}/>
    </div>
  );
}
```
Props (short for properties) are like arguments you pass to a component — just like how you pass arguments to a function.
```
//Example : 
function greet(name) {
  console.log("Hello", name);
}
greet("Twinkle");


//same thing in react becomes :

function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}
<Greeting name="Twinkle" />
```
Here, props.name is "Twinkle". Think of props as an object containing the data you pass to a component.
<br>**App Component**
```
function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}
```
- Declaring an array animals
- Passing it to the List component like this: <List animals={animals} />
- So inside the List component, React sends this object:
```
props = {
  animals: ["Lion", "Cow", "Snake", "Lizard"]
}
```
**List component**
```
function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}
```
Inside List, you’re:

- Accessing the animals array using props.animals
- Looping over it using .map()
- For each animal, rendering a ListItem component and passing the animal as a prop
```
<ListItem key={animal} animal={animal} />
```
**ListItem Component**
```
function ListItem(props) {
  return <li>{props.animal}</li>;
}
```
Inside ListItem, you’re:

- Receiving a props object like { animal: "Lion" }, then { animal: "Cow" }, and so on
- Rendering an <li> with the animal name

Think of props as little packages of data that travel from one component to another
## Conditionally rendering UI
1. Ternary Operator
```
//Lets say we only want to render animals that start with letter L

function List(props){
  return (
      <ul>
        props.animals.map((animal)=>{ 
          return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null ;
        }
      </ul>
  );
}

function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}
```
Another quick way of conditionally rendering an element is by using the && operator.
```
function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") && <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}
```
## Handle Empty or missing data
So there are other ways to conditionally render like if/else and switch statements. Lets say there are 2 possible cases : 
- No animals? → Show: "No animals in the list!"
- Data is loading from somewhere? → Show: "Loading..."
```
function List(props) {
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <ul>
      {props.animals.map(animal => <li key={animal}>{animal}</li>)}
    </ul>
  );
}
```
We can also write this same logic using ternary operators `&&` and `? :`
